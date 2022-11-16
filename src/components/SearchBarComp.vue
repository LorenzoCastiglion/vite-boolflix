<template>
    <div>
        <form>
            <div class="d-flex justify-content-end">

                <div class="col-sm-3 my-1">
                    <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                    <div class="input-group">

                        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="search">
                    </div>
                </div>

                <div class="col-auto my-1">
                    <button type="submit" class="btn btn-primary">Find</button>
                </div>
            </div>
        </form>

    </div>
</template>

<script>

export default {
    name: 'SearchBarComp',
}

</script>

<style lang="scss" scoped>

</style>
