<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col lg="12">
        <newschool fixed bordered caption="<i class='fa fa-align-justify'></i> Bordered Table"></newschool>
      </b-col><!--/.col-->
    </b-row><!--/.row-->

  </div>

</template>

<script>
import newschool from './NewSchool.vue'

export default {
  name: 'add_newschool',
  components: {newschool}
}
</script>
