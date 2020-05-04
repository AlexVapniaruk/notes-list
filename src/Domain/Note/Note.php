<?php
declare(strict_types=1);

namespace App\Domain\Note;

use JsonSerializable;

class Note implements JsonSerializable
{
    /**
     * @var int|null
     */
    private $id;

    /**
     * @var string
     */
    private $title;

    /**
     * @var string
     */
    private $text;

    /**
     * @var string
     */
    private $date;

    /**
     * @param int|null  $id
     * @param string    $title
     * @param string    $text
     * @param string    $date
     */
    public function __construct(?int $id, string $title, string $text, string $date)
    {
        $this->id = $id;
        $this->title = $title;
        $this->text = $text;
        $this->date = $date;
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @return string
     */
    public function getText(): string
    {
        return $this->text;
    }

    /**
     * @return string
     */
    public function getDate(): string
    {
        return $this->date;
    }

    /**
     * @return array
     */
    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'text' => $this->text,
            'date' => $this->date,
        ];
    }
}
