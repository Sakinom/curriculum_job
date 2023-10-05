<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    /**
     * ToDo作成.
     *
     * @param Request $request
     * @return void
     */
    public function create(Request $request) {
        $todo = Todo::create($request->all());

        return response()->json($todo);
    }
    /**
     * ToDo全取得.
     *
     * @param Request $request
     * @return void
     */
    public function fetchAll() {
        $todos = Todo::all();
        return response()->json($todos);
    }
    /**
     * ToDo取得.
     *
     * @param Request $request
     * @return void
     */
    public function fetch($todoId) {
        $todo = Todo::find($todoId);
        return response()->json($todo);
    }
    /**
     * ToDo更新.
     *
     * @param Request $request
     * @return void
     */
    public function update(Request $request, $todoId) {
        $todo = Todo::find($todoId);
        $todo->update([
            'text' => $request->text,
        ]);
        return response()->json($todo);
    }
    /**
     * ToDo削除.
     *
     * @param Request $request
     * @return void
     */
    public function delete($todoId) {
        $todo = Todo::find($todoId);
        $todo->delete();
        return response()->json();
    }
}
