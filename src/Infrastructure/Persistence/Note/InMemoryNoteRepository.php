<?php
declare(strict_types=1);

namespace App\Infrastructure\Persistence\Note;

use App\Domain\Note\Note;
use App\Domain\Note\NoteNotFoundException;
use App\Domain\Note\NoteRepository;
use Carbon\Carbon;
use Illuminate\Database\Connection;

class InMemoryNoteRepository implements NoteRepository
{
    /**
     * @var Connection
     */
    private $connection;

    /**
     * @var Note[]
     */
    private $notes;

    /**
     * InMemoryNoteRepository constructor.
     *
     * @param array|null $notes
     * @param Connection $connection The database connection
     */
    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
        $this->notes = $notes ?? [];
    }

    /**
     * {@inheritdoc}
     */
    public function findAll(): array
    {
        $notes = $this->connection->table('notes')->get()->toArray();
        return $notes;
    }

    /**
     * {@inheritdoc}
     */
    public function findNoteOfId(int $id): Note
    {
        $note = $this->connection->table('notes')->find($id);

        if (!isset($note)) {
            throw new NoteNotFoundException();
        }

        return new Note($note->id, $note->title, $note->text, $note->date);
    }

    public function createNote($data)
    {
        $data = (array) json_decode($data);
        $data['date'] = Carbon::now();
        if($this->connection->table('notes')->insert($data)) {
            return true;
        }
        return false;
        //TODO Create Throw error
    }

    public function deleteNote(int $id)
    {
        return $this->connection->table('notes')->delete($id);
        //TODO Delete Throw error
    }

    public function editNote($id, $data)
    {
        $data = (array) json_decode($data);
        $status = $this->connection->table('notes')
            ->where([ 'id' => $id ])
            ->update([ 'title' => $data['title'], 'text' => $data['text']]);

        if ($status) {
            return true;
        }
        return false;
        //TODO Edit Throw error
    }
}
