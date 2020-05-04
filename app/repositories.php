<?php
declare(strict_types=1);

use App\Domain\User\UserRepository;
use App\Domain\Note\NoteRepository;
use App\Infrastructure\Persistence\User\InMemoryUserRepository;
use App\Infrastructure\Persistence\Note\InMemoryNoteRepository;
use DI\ContainerBuilder;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        //UserRepository::class => \DI\autowire(InMemoryUserRepository::class),
        NoteRepository::class => \DI\autowire(InMemoryNoteRepository::class),
    ]);
};
