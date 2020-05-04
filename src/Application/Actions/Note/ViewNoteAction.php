<?php
declare(strict_types=1);

namespace App\Application\Actions\Note;

use Psr\Http\Message\ResponseInterface as Response;

class ViewNoteAction extends NoteAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $noteId = (int) $this->resolveArg('id');
        $note = $this->noteRepository->findNoteOfId($noteId);

        return $this->respondWithData($note);
    }
}
