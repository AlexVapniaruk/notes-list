<?php
declare(strict_types=1);

use DI\ContainerBuilder;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;
use Monolog\Processor\UidProcessor;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use Illuminate\Container\Container as IlluminateContainer;
use Illuminate\Database\Connection;
use Illuminate\Database\Connectors\ConnectionFactory;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        LoggerInterface::class => function (ContainerInterface $c) {
            $settings = $c->get('settings');

            $loggerSettings = $settings['logger'];
            $logger = new Logger($loggerSettings['name']);

            $processor = new UidProcessor();
            $logger->pushProcessor($processor);

            $handler = new StreamHandler($loggerSettings['path'], $loggerSettings['level']);
            $logger->pushHandler($handler);

            return $logger;
        },
    ]);

    $containerBuilder->addDefinitions([
        Connection::class => function (ContainerInterface $containerBuilder) {
            $factory = new ConnectionFactory(new IlluminateContainer());

            $connection = $factory->make($containerBuilder->get('settings')['db']);

            $connection->disableQueryLog();

            return $connection;
        }
    ]);

    $containerBuilder->addDefinitions([
        PDO::class => function (ContainerInterface $containerBuilder) {
            return $containerBuilder->get(Connection::class)->getPdo();
        },
    ]);


};
