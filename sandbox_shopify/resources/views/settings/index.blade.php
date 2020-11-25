@extends('extended-layout')
<link rel="stylesheet" type="text/css" href="{{ url('/css/tailwind.css') }}" />
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 pt-5 mx-auto">
                <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead>
                                    <tr>
                                        <th class="px-6 py-3 bg-gray-50 text-left leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Id
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-left leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-left leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50"></th>
                                    </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                    @foreach($settings as $setting)
                                        <tr>
                                            <td class="px-6 py-4 whitespace-no-wrap">
                                                {{ $setting->id }}
                                            </td>
                                            <td class="px-6 py-4 whitespace-no-wrap">
                                                {{ $setting->name }}
                                            </td>
                                            <td class="px-6 py-4 whitespace-no-wrap">
                                                @if($setting->enabled == 1)
                                                    <span class="px-2 inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Active
                                        </span>
                                                @else
                                                    <span class="px-2 inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Inactive
                                        </span>
                                                @endif
                                            </td>
                                            <td class="px-6 py-4 whitespace-no-wrap text-right leading-5 font-medium">
                                                <a href="settings/{{ $setting->id }}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                            </td>
                                        </tr>
                                    @endforeach
                                    <!-- More rows... -->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

