<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shered/Header.vue';
    import Footer from './components/Shered/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServersDetails from './components/Server/ServersDetails.vue';

    export default {
        components: {
            'app-header' : Header,
            'app-servers': Servers,
            'app-server-details': ServersDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
