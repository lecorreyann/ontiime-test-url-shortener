<?php

namespace App\Service;

use App\Entity\Link;
use Doctrine\Persistence\ManagerRegistry;

class RandomShort {

    private $doctrine;

    public function __construct(ManagerRegistry $doctrine) {
        $this->doctrine = $doctrine;
    }

    // Create A Random Unique Shorten
    public function generate():string {
        $end = false;
        while($end !== true) {
            $short = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 7);
            $link = $this->doctrine->getRepository(Link::class)->findOneBy(['short' => $short]);
            if($link) {
                $end = false;
            }
            else {
                $end = true;
            }
            return $short;
        }

    }

}