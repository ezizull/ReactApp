<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Blog;
use Illuminate\Database\Seeder;

class BlogsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Blog::truncate();
        $faker = \Faker\Factory::create();
        for($i = 0; $i < 5; $i++){
            Blog::create([
                'title' => $faker->sentence,
                'body' => $faker->text,
            ]);
        }

    }
}
