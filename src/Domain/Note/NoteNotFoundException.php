<?php
declare(strict_types=1);

namespace App\Domain\Note;

use App\Domain\DomainException\DomainRecordNotFoundException;

class NoteNotFoundException extends DomainRecordNotFoundException
{
    public $message = 'The note you requested does not exist.';
}
