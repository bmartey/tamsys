<template>
    <div class="container">
        <div class="row m-t-70">
            <div class="col-lg-12 col-sm-12 col-xs-12">
                <h4 class="header-title m-t-0">{{msg}}</h4>
                <form id="wizard-vertical">
                    <h3>Application Details</h3>
                    <section>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4">
                                <div class="form-group clearfix">
                                    <label for="comp-name"> Company Name *</label>
                                    <div>
                                        <input id="comp-name" name="comp-name" type="text" class="required form-control">
                                    </div>
                                </div>
                                <!-- <div class="form-group clearfix">
                                    <label for="userName2">User name </label>
                                    <div>
                                        <input class="form-control" id="userName2" name="userName" type="text">
                                    </div>
                                </div> -->
                            </div>
                            <div class="col-xs-12 col-sm-4">
                                <div class="form-group clearfix">
                                    <label for="cont-name"> Contact Person *</label>
                                    <div>
                                        <input id="cont-name" name="cont-name" type="text" class="required form-control">
                                    </div>
                                </div>
                                <!-- <div class="form-group clearfix">
                                    <label for="password2"> Password *</label>
                                    <div>
                                        <input id="password2" name="password" type="text" class="required form-control">

                                    </div>
                                </div> -->
                            </div>
                            <div class="col-xs-12 col-sm-4">
                                <div class="form-group clearfix">
                                    <label for="addr"> Address (Postal) *</label>
                                    <div>
                                        <input id="addr" name="addr" type="text" class="required form-control">
                                    </div>
                                </div>
                                <!-- <div class="form-group clearfix">
                                    <label for="userName2">User name </label>
                                    <div>
                                        <input class="form-control" id="userName2" name="userName" type="text">
                                    </div>
                                </div> -->
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-4">
                                <div class="form-group clearfix">
                                    <label for="name2"> Telephone Number *</label>
                                    <div>
                                        <input id="name2" name="name" type="text" class="required form-control">
                                    </div>
                                </div>
                                <!-- <div class="form-group clearfix">
                                    <label for="password2"> Password *</label>
                                    <div>
                                        <input id="password2" name="password" type="text" class="required form-control">

                                    </div>
                                </div> -->
                            </div>
                                <div class="col-xs-12 col-sm-4">
                                <div class="form-group clearfix">
                                    <label for="name2"> Fax Number</label>
                                    <div>
                                        <input id="name2" name="name" type="text" class="form-control">
                                    </div>
                                </div>
                                <!-- <div class="form-group clearfix">
                                    <label for="userName2">User name </label>
                                    <div>
                                        <input class="form-control" id="userName2" name="userName" type="text">
                                    </div>
                                </div> -->
                            </div>
                            <div class="col-xs-12 col-sm-4">
                                <div class="form-group clearfix">
                                    <label for="name2"> Email Address *</label>
                                    <div>
                                        <input id="email2" name="email" type="text" class="required email form-control">
                                    </div>
                                </div>
                                <!-- <div class="form-group clearfix">
                                    <label for="password2"> Password *</label>
                                    <div>
                                        <input id="password2" name="password" type="text" class="required form-control">

                                    </div>
                                </div> -->
                            </div>
                        </div><!-- end row -->
                        <div class="row">
                        </div><!-- end row -->
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label class="col-lg-12 control-label ">(*) Mandatory</label>
                                </div>
                            </div>
                        </div><!-- end row -->
                    </section>
                    <h3>Equipment Details</h3>
                    <section>
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="productname"> Product/Equipment Type *</label>
                                    <div>
                                        <input id="productname" name="productname" type="text" class="required form-control" placeholder="As should appear on Authorisation">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="brandname"> Brand name *</label>
                                    <div>
                                        <input id="brandname" name="brandname" type="text" class="required form-control" placeholder="As should appear on Authorisation">
                                    </div>
                                </div>
                            </div>
                        </div><!-- end row -->
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="modalnum">Modal Number *</label>
                                    <div>
                                        <input id="modalnum" name="modalnum" type="text" class="required form-control" placeholder="As should appear on Authorisation">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="prodname">Product Name *</label>
                                    <div>
                                        <input id="prodname" name="prodname" type="text" class="required  form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="manuname">Name of Manufacturer *</label>
                                    <div>
                                        <input id="manuname" name="manuname" type="text" class="required form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="manuaddr">Address of Manufacturer *</label>
                                    <div>
                                        <input id="manuaddr" name="manuaddr" type="text" class="required form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="origin">Country of Origin</label>
                                    <div>
                                        <input id="origin" name="origin" type="text" class="required form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="intenduse">Intended Use</label>
                                    <div>
                                        <input id="intenduse" name="intenduse" type="text" class="required form-control">
                                    </div>
                                </div>
                            </div>
                        </div><!-- end row -->
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label class="col-lg-12 control-label ">(*) Mandatory</label>
                                </div>
                            </div>
                        </div><!-- end row -->
                    </section>
                    <h3>Additional Details </h3>
                    <section>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6">
                                    <div class="form-group clearfix">
                                        <label for="productname"> Frequency Range*</label>
                                        <div>
                                            <input id="productname" name="productname" type="text" class="required form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6">
                                    <div class="form-group clearfix">
                                        <label for="brandname"> RF Output Power Radiated *</label>
                                        <div>
                                            <input id="brandname" name="brandname" type="text" class="required form-control">
                                        </div>
                                    </div>
                                </div>
                            </div><!-- end row -->
                            <div class="row">
                                <div class="col-xs-12 col-sm-6">
                                    <div class="form-group clearfix">
                                        <label for="modalnum">RF Output Power Conducted *</label>
                                        <div>
                                            <input id="modalnum" name="modalnum" type="text" class="required form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6">
                                    <div class="form-group clearfix">
                                        <label for="prodname">RF Channel Spacing *</label>
                                        <div>
                                            <input id="prodname" name="prodname" type="text" class="required  form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="row">
                                <div class="col-xs-12 col-sm-6">
                                    <div class="form-group clearfix">
                                        <label for="manuname">Type of Modulation *</label>
                                        <div>
                                            <input id="manuname" name="manuname" type="text" class="required form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6">
                                    <div class="form-group clearfix">
                                        <label for="manuaddr">Bandwidth *</label>
                                        <div>
                                            <input id="manuaddr" name="manuaddr" type="text" class="required form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="row">
                                <div class="col-xs-12 col-sm-6">
                                    <div class="form-group clearfix">
                                        <label for="origin">Fireware Version</label>
                                        <div>
                                            <input id="origin" name="origin" type="text" class="required form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6">
                                    <div class="form-group clearfix">
                                        <label for="intenduse">Antenna Gain </label>
                                        <div>
                                            <input id="intenduse" name="intenduse" type="text" class="required form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6">
                                    <div class="form-group clearfix">
                                        <label for="intenduse">Technical Variants </label>
                                        <div>
                                            <input id="intenduse" name="intenduse" type="text" class="required form-control">
                                        </div>
                                    </div>
                                </div>
                            </div><!-- end row -->
                            <div class="row">
                                <div class="col-xs-12 col-sm-6">
                                    <div class="form-group clearfix">
                                        <label class="col-lg-12 control-label ">(*) Mandatory</label>
                                    </div>
                                </div>
                            </div>
                    </section>
                    <h3>Certificate of Compliance</h3>
                    <section>
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="productname"> Issuing Body *</label>
                                    <div>
                                        <input id="productname" name="productname" type="text" class="required form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="brandname"> Issuing Date *</label>
                                    <div>
                                        <input id="brandname" name="brandname" type="text" class="required form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <h3>Applicable Standard</h3>
                    <section>
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="productname"> EMC *</label>
                                    <div>
                                        <input id="productname" name="productname" type="text" class="required form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="brandname"> Test Report No. *</label>
                                    <div>
                                        <input id="brandname" name="brandname" type="text" class="required form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="productname"> Health & Safety *</label>
                                    <div>
                                        <input id="productname" name="productname" type="text" class="required form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="brandname"> Test Report No. *</label>
                                    <div>
                                        <input id="brandname" name="brandname" type="text" class="required form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group clearfix">
                            <h3>Undertaking:</h3>
                            <p>
                                I/We $companyName hereby certify that the information supplied in the applicaton form is true in all respects and I/We hereby give undertaking that upon grant of the Authorisation, I/We shall abide by the terms and conditions upon which the Authorisation is granted. I/We accept that my/our Authorisation, may be revoked and the appropriate penalty applied if its established that I/We have been granted Authorisation based on incorrect information
                            </p>
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="productname"> Signed </label>
                                    <div>
                                        <input id="productname" name="productname" type="text" class="required form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group clearfix">
                                    <label for="brandname">Date</label>
                                    <div>
                                        <input id="brandname" name="brandname" type="text" class="required form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <input id="acceptTerms-2" name="acceptTerms2" type="checkbox" class="required">
                                <label for="acceptTerms-2">I agree with the Terms and Conditions.</label>
                            </div>
                        </div>
                    </section>
                    <h3>Supporting Documents</h3>
                    <section>
                        <div class="form-group clearfix">
                            <div class="col-lg-12">
                                <ul class="list-unstyled w-list">
                                    <li><b>First Name :</b> Jonathan </li>
                                    <li><b>Last Name :</b> Smith </li>
                                    <li><b>Emial:</b> jonathan@smith.com</li>
                                    <li><b>Address:</b> 123 Your City, Cityname. </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <h3>Finish</h3>
                    <section>
                        <div class="form-group clearfix">
                            <div class="col-lg-12">
                                <div class="checkbox checkbox-primary">
                                    <input id="checkbox-v" type="checkbox">
                                    <label for="checkbox-v"> I agree with the Terms and Conditions. </label>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'container',
  data () {
    return {
      msg: 'Application For Type Approval'
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 70px;
}
</style>
