<?php
declare(strict_types=1);

namespace App\Application\Actions\Note;

use Psr\Http\Message\ResponseInterface as Response;

class DeleteNoteAction extends NoteAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $noteId = (int) $this->resolveArg('id');
        $status = $this->noteRepository->deleteNote($noteId);

        return $this->respondWithData($status);
    }
}
