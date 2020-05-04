<?php
declare(strict_types=1);

namespace App\Application\Actions\Note;

use Psr\Http\Message\ResponseInterface as Response;

class ListNotesAction extends NoteAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $notes = $this->noteRepository->findAll();

        $this->logger->info("Notes list was viewed.");
        return $this->respondWithData($notes);
    }
}
