<?php
declare(strict_types=1);

namespace App\Domain\Note;

interface NoteRepository
{
    /**
     * @return Note[]
     */
    public function findAll(): array;

    /**
     * @param int $id
     * @return Note
     * @throws NoteNotFoundException
     */
    public function findNoteOfId(int $id): Note;

    /**
     * @param array $data
     * @return boolean
     */
    public function createNote($data);
}
