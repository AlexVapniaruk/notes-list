<?php
declare(strict_types=1);

use App\Application\Actions\User\ListUsersAction;
use App\Application\Actions\User\ViewUserAction;
use App\Application\Actions\Note\ListNotesAction;
use App\Application\Actions\Note\ViewNoteAction;
use App\Application\Actions\Note\CreateNoteAction;
use App\Application\Actions\Note\EditNoteAction;
use App\Application\Actions\Note\DeleteNoteAction;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

return function (App $app) {
    $app->get('/', function (Request $request, Response $response) {
        $response->getBody()->write('Hello world!');
        return $response;
    });

    $app->group('/users', function (Group $group) {
        $group->get('', ListUsersAction::class);
        $group->get('/{id}', ViewUserAction::class);
    });

    $app->group('/notes', function(Group $group) {
        $group->get('', ListNotesAction::class);
        $group->post('', CreateNoteAction::class);
        $group->get('/{id}', ViewNoteAction::class);
        $group->delete('/{id}', DeleteNoteAction::class);
        $group->put('/{id}', EditNoteAction::class);

        $group->options('', function (Request $request, Response $response): Response {
            return $response;
        });
        $group->options('/{id}', function (Request $request, Response $response): Response {
            return $response;
        });
    });
};
