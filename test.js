const BASE_URL = 'http://localhost:5000/api/todos';

async function testTodosAPI() {
  try {
    // 1. Create a new todo
    const createRes = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Test Todo with Fetch' })
    });
    const createdTodo = await createRes.json();
    console.log('✅ Created:', createdTodo);

    // 2. Get all todos
    const getRes = await fetch(BASE_URL);
    const allTodos = await getRes.json();
    console.log('📄 All Todos:', allTodos);

    // 3. Update the created todo
    const updateRes = await fetch(`${BASE_URL}/${createdTodo._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Updated Fetch Todo', completed: true })
    });
    const updatedTodo = await updateRes.json();
    console.log('✏️ Updated:', updatedTodo);

    // 4. Delete the updated todo
    const deleteRes = await fetch(`${BASE_URL}/${createdTodo._id}`, {
      method: 'DELETE'
    });
    const deleteResult = await deleteRes.json();
    console.log('🗑️ Deleted:', deleteResult);

  } catch (err) {
    console.error('❌ Error:', err);
  }
}

testTodosAPI();
