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
        $userId = (int) $this->resolveArg('id');
        $user = $this->noteRepository->findNoteOfId($userId);

        $this->logger->info("Note of id `${userId}` was viewed.");

        return $this->respondWithData($user);
    }
}
