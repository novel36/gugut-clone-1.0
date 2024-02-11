<script>
	let todolist = [
		{ content: 'novel is good', editing: true,checked:false},
		{ content: 'novel is good', editing: false,checked:true }
	];
    let newtodocontent="";
	function hello() {
		console.log(todolist);
	}
    function editHandler(index){
        console.log(index);
        todolist[index].editing=true;
    }
    function saveHandler(index) {
        console.log(index);
        todolist[index].editing=false;
    }
    function deletetodo(index) {
        todolist.splice(index,1)
        todolist =todolist;
    }
    function addTodo() {
        todolist=[...todolist,{content:newtodocontent,checked:false,editing:false}];
    }
</script>

<div class="pt-28 items-center flex flex-col w-full justify-center">
	<div class="">
		<p class="text-center mb-4">Add Todo List</p>
		<div class="w-[600px] flex justify-center space-x-2">
			<input class="outline outline-1  rounded-md py-2" bind:value={newtodocontent} type="text" name="" id="" />
			<button class="px-4 bg-orange-600 py-2 rounded-md text-white" on:click={addTodo}>add</button>
		</div>
        {#each todolist as item,i}
        <div>
			<ul>
				<div class="flex flex-row justify-between mt-4 bg-purple-300 rounded-md p-4">
					
                    {#if item.editing}
                       <input type="text" name="" bind:value={item.content} id="" class="flex px-4  bg-transparent w-80 outline outline-1 rounded-md">
                    {:else}
                    <div class="flex items-center">
						<input
							type="checkbox"
                            bind:checked={item.checked}
							name=""
							id=""
							class="rounded-md outline-none border-none mr-4 h-8 w-8 py-0"
						/>
						<p>{item.content}</p>
					</div>
                    {/if}
                    

					<div>
                        {#if item.editing}
                             <!-- content here -->
                             <button class="bg-blue-500 px-6 py-1 text-white rounded-md" on:click={()=>saveHandler(i)}
                                >save</button>
                        {:else}
                             <!-- else content here -->
                             <button class="bg-blue-500 px-6 py-1 text-white rounded-md" on:click={()=>editHandler(i)}
                                >edit</button>
                        {/if}
					 
						<button class="bg-red-500 px-6 py-1 text-white rounded-md" on:click={deletetodo}>delete</button>
					</div>
				</div>
			</ul>
		</div>     
        {/each}
		
	</div>
</div>
