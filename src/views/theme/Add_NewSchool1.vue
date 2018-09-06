<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-form>
          <b-card>
            <div slot="header">
              <strong>Add</strong> New School
            </div>
            <!-- Bootstrap Vue has some problems with Inline forms that's why we use some standard bootstrap classes -->

              <label class="mr-sm-2" for="inlineInput1">Name: </label>
              <b-input md="12" id="inlineInput1" type="text" placeholder="Jane Doe"></b-input>

            <div slot="footer">
              <b-button class="mr-sm-2" type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Add</b-button>
              <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
            </div>

          </b-card>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "add_newschool",
  data() {
    return {
      selected: [], // Must be an array reference!
      show: true
    };
  },
  methods: {
    click() {
      // do nothing
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
