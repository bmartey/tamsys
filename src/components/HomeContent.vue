<template>
    <div id="container" class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12">
            <div class="card-box">
                <div class="row m-t-50">
                    <div class="col-md-12 col-xs-12 m-t-20">
                        <h1 class="header-title m-t-0">
                          <b>NCA Application Portal for Type Approval Certificate and Dealership Licence</b>
                        </h1>

                        <ul class="nav nav-tabs m-b-10" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home"
                                    role="tab" aria-controls="home" aria-expanded="true">Type Approval Certification</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile"
                                    role="tab" aria-controls="profile">Dealership License</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div role="tabpanel" class="tab-pane fade in active show" id="home"
                                    aria-labelledby="home-tab">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card-box table-responsive">
                                            
                                        </div>
                                    </div>
                                </div>
                                <!-- end row -->
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel"
                                    aria-labelledby="profile-tab">
                                    <div class="row">
                                    <div class="col-12">
                                        <div class="card-box table-responsive">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'container',
  data () {
    return {
      msg: 'NCA Application Portal for Type Approval Certificate and Dealership Licence'
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 90px;
}
</style>