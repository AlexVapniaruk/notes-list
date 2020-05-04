<?php
declare(strict_types=1);

namespace App\Application\Actions\Note;

use App\Application\Actions\Action;
use App\Application\Actions\ActionPayload;
use App\Domain\Note\NoteRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Log\LoggerInterface;

abstract class NoteAction extends Action
{
    /**
     * @var NoteRepository
     */
    protected $noteRepository;

    /**
     * @param LoggerInterface $logger
     * @param NoteRepository  $noteRepository
     */

    public function __construct(LoggerInterface $logger, NoteRepository $noteRepository)
    {
        parent::__construct($logger);
        $this->noteRepository = $noteRepository;
    }
}
