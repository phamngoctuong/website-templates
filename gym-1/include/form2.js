document.write(`
<div class=" overflow-hidden space-bo ttom background-image shape-mockup-wrap">
  <div class="shape-mockup d-none d-xxl-block" style="right: 0%; bottom: 0%;"><img
      src="assets/img/shape/man_shape_3.png" alt="shape"></div>
  <div class="container">
    <div class="contact-area area-shape1">
      <div class="row">
        <div class="mt-5 col-xl-12 text-center text-xl-start">
          <div class="ps-xxl-4 ms-xl-3">
            <form action="" onsubmit=" return sender()" class="contact-form2 ajax-contact">
              <div class="row">
                <div class="form-group col-md-12">
                  <input type="text" class="form-control" name="name" id="name" placeholder="Your Name" required>
                  <i class="fal fa-user"></i>
                </div>
                <div class="form-group col-md-12">
                  <input type="number" class="form-control" name="number" id="number" placeholder="Phone Number"
                    required>
                  <i class="fal fa-phone"></i>
                </div>
                <div class="form-group col-12">
                  <textarea name="message" id="message" cols="30" rows="3" class="form-control"
                    placeholder="Aap Ko Kis Type Ki Website Ki Requirement Hai" required></textarea>
                  <i class="fal fa-pencil"></i>
                </div>
                <div class="form-btn col-12">
                  <button class="btn btn-secondary rounded-10" id="btn">Submit Request<i
                      class="far fa-arrow-right ms-2"></i></button>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
              <p class="form-messages mb-0 mt-3"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`);