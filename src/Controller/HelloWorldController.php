<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HelloWorldController extends AbstractController
{
    #[Route('/hello/world', name: 'hello_world')]
    public function index(): Response
    {
        $title = "SYMFONY";

        return $this->render('hello_world/index.html.twig', [
            'title' => $title,
        ]);
    }
}
//http://localhost/HelloWorld/public/index.php/hello/world