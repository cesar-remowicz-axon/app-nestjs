<script lang="ts">
    import HttpMethod from "../utils/http.methods";
    const http = new HttpMethod();

    let data: string[] = [];

    async function getRecentCotation() {
        const url = "http://localhost:9001/api/v1/hello";
        const res = await http.get(url);
        data = [res.message];
    }
</script>

<h1>APP</h1>

{#await getRecentCotation()}
    Loading...
{:then}
    {#each data as item}
        {item}
    {/each}
{/await}
