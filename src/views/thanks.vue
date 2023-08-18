<template>
    <div>
        <Header_dow />
        <div class="TextContent" style="filter: url(#frosted); opacity: 0.7">
            <h1>Thank you for your order!</h1>
            <p>Thank you for your order! We will contact you as soon as possible.</p>
        </div>
    </div>
</template>
<script>
import Header_dow from "../components/Header_dow.vue"
export default {
  name: "thanks",
  components: {
    Header_dow
  },
};
</script>