/**
 * 
    <div v-on:click="grandparentClick">
        <div v-on:click.stop.self="parentClick">
            <button v-on:click="executeSearch">
                Search
            </button>
        </div>
    </div>
 */