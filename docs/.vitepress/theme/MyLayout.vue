<template>
    <Layout>
        <template #aside-outline-before>
            My Custom Sidebar top content
        </template>
    </Layout>
</template>
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>