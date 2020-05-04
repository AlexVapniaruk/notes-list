<?php
declare(strict_types=1);

namespace App\Application\Actions\Note;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class CreateNoteAction extends NoteAction
{
    protected $response;
    /**
     * {@inheritdoc}
     */
    public function action(): Response
    {
        return $this->respondWithData('Note created');
    }

    public function __invoke(Request $request, Response $response, $args): Response
    {
        $this->response = $response;
        $body = $request->getBody();
        $data = $body->getContents();
        //TODO make validation
        if ($this->noteRepository->createNote($data)) {
            return $this->action();
        }
    }
}
