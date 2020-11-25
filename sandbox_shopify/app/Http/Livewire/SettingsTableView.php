<?php

namespace App\Http\Livewire;

use App\Models\Settings;
use Illuminate\Database\Eloquent\Builder;
use LaravelViews\Views\TableView;

class SettingsTableView extends TableView
{
    /**
     * Sets a initial query with the data to fill the table
     *
     * @return Builder Eloquent query
     */
    public function repository(): Builder
    {
        return Settings::query();
    }

    /**
     * Sets the headers of the table as you want to be displayed
     *
     * @return array<string> Array of headers
     */
    public function headers(): array
    {
        return ['Id','Name','Status'];
    }

    /**
     * Sets the data to every cell of a single row
     *
     * @param $model Settings model for each row
     * @return array
     */
    public function row($model): array
    {
        return [$model->id,$model->name,$model->enabled];
    }
}
