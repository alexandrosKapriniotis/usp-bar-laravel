<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('name')->default('Usp Bar');
            $table->bigInteger('store_id');
            $table->string('css_class')->default('');
            $table->string('container_width')->default('container');
            $table->string('desktop_only')->default('boxed');
            $table->tinyInteger('homepage_only')->default(0);
            $table->tinyInteger('enabled')->default(0);
            $table->integer('padding')->default(0);
            $table->tinyInteger('columns')->default(4);
            $table->string('first_section_image')->nullable();
            $table->string('first_section_image_position')->default('left');
            $table->string('first_section_link')->nullable();
            $table->string('first_section_link_option')->default('_self');
            $table->string('first_section_title')->nullable();
            $table->integer('first_section_title_text_size')->default(18);
            $table->string('first_section_title_text_color')->default('#FFF');
            $table->string('first_section_title_text_align')->default('center');
            $table->text('first_section_message')->nullable();
            $table->string('second_section_image')->nullable();
            $table->string('second_section_image_position')->default('left');
            $table->string('second_section_link')->nullable();
            $table->string('second_section_link_option')->default('_self');
            $table->string('second_section_title')->nullable();
            $table->integer('second_section_title_text_size')->default(18);
            $table->string('second_section_title_text_color')->default('#FFF');
            $table->string('second_section_title_text_align')->default('center');
            $table->text('second_section_message')->nullable();
            $table->string('third_section_image')->nullable();
            $table->string('third_section_image_position')->default('left');
            $table->string('third_section_link')->nullable();
            $table->string('third_section_link_option')->default('_self');
            $table->string('third_section_title')->nullable();
            $table->integer('third_section_title_text_size')->default(18);
            $table->string('third_section_title_text_color')->default('#FFF');
            $table->string('third_section_title_text_align')->default('center');
            $table->text('third_section_message')->nullable();
            $table->string('fourth_section_image')->nullable();
            $table->string('fourth_section_image_position')->default('left');
            $table->string('fourth_section_link')->nullable();
            $table->string('fourth_section_link_option')->default('_self');
            $table->string('fourth_section_title')->nullable();
            $table->integer('fourth_section_title_text_size')->default(18);
            $table->string('fourth_section_title_text_color')->default('#FFF');
            $table->string('fourth_section_title_text_align')->default('center');
            $table->text('fourth_section_message')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');
    }
}
