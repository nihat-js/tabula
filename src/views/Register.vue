<template>
  <div class="login_box_main_wrapper custom-height" id="login_height">
    <div class="container">
      <div class="login-logo gap-top">
        <a href="index.html"> <img src="@/assets/images/index1-logo.png" alt="logo"> </a>
      </div>
      <div class="form-tabs">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
              type="button" role="tab" aria-controls="pills-home" aria-selected="true">User</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-freelauncer-tab" data-bs-toggle="pill"
              data-bs-target="#pills-freelauncer" type="button" role="tab" aria-controls="pills-freelauncer"
              aria-selected="false">Freelancer</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
              type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Company</button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

          <div class="signin-wrapper">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                <div class="left-side">
                  <h4>Sign Up as User</h4>
                  <form>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="text" placeholder="Full Name">
                        <span><i class="fa fa-user" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="email" placeholder="Email">
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="date">
                        <span><i class="fa fa-user" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="password" placeholder="Re-type Password">
                        <span><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="cond">
                      <input type="checkbox" id="box1" name="box1" value="box1">
                      <label for="box1"> Yes, I understand and agree to the Terms & Conditions.</label>
                    </div>


                    <div class="login-btn-sec">
                      <a class="sub-btn" href="javascript:;"><span>Sign Up</span></a>
                      <div class="social-btn">
                        <span>- OR -</span>
                        <ul>
                          <li>
                            <a href="javascript:;"> <span> <svg viewBox="0 0 25 48" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                  <g id="Page-21" stroke="none">
                                    <g id="Social-Icons---Isolated1" transform="translate(-176.000000, -55.000000)">
                                      <path
                                        d="M200.78439,55.3395122 L200.78439,62.9141463 L196.28878,62.9258537 C192.764878,62.9258537 192.085854,64.6 192.085854,67.0468293 L192.085854,72.4673171 L200.48,72.4673171 L199.39122,80.9434146 L192.085854,80.9434146 L192.085854,103 L183.329951,103 L183.329951,80.9434146 L176,80.9434146 L176,72.4673171 L183.329951,72.4673171 L183.329951,66.2156098 C183.329951,58.9570732 187.754146,55 194.24,55 C197.331902,55 200,55.2341463 200.78439,55.3395122 Z"
                                        id="Facebook4"></path>
                                    </g>
                                  </g>
                                </svg></span> </a>
                          </li>
                          <li>
                            <a href="javascript:;"> <span><svg version="1.1" id="Capa_1"
                                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                  y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                                  xml:space="preserve">
                                  <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
                                                   c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
                                                   c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
                                                   c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
                                                   c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
                                                   c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
                                                   C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
                                                   C480.224,136.96,497.728,118.496,512,97.248z"></path>
                                </svg></span> </a>
                          </li>
                          <li>
                            <a href="javascript:;"> <span>
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="m75 512h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0">
                                  </path>
                                  <path
                                    d="m256 391c74.4375 0 135-60.5625 135-135s-60.5625-135-135-135-135 60.5625-135 135 60.5625 135 135 135zm0-240c57.898438 0 105 47.101562 105 105s-47.101562 105-105 105-105-47.101562-105-105 47.101562-105 105-105zm0 0">
                                  </path>
                                  <path
                                    d="m406 151c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0">
                                  </path>
                                </svg>
                              </span></a>
                          </li>
                        </ul>
                      </div>
                      <p>Do have an account? <RouterLink to="/auth/login">Sign In now!</RouterLink>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="login-img">
                  <img src="@/assets/images/login-side.png" alt="img">
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="tab-pane fade" id="pills-freelauncer" role="tabpanel" aria-labelledby="pills-freelauncer-tab">

          <div class="signin-wrapper">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                <div class="left-side">
                  <h4>Sign Up as Freelancer</h4>
                  <form>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="text" placeholder="Full Name">
                        <span><i class="fa fa-user" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="email" placeholder="Email">
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="date">
                        <span><i class="fa fa-user" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="password" placeholder="Re-type Password">
                        <span><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="cond">
                      <input type="checkbox" id="box" name="box" value="box">
                      <label for="box"> Yes, I understand and agree to the Terms & Conditions.</label>
                    </div>


                    <div class="login-btn-sec">
                      <a class="sub-btn" href="javascript:;"><span>Sign Up</span></a>
                      <div class="social-btn">
                        <span>- OR -</span>
                        <ul>
                          <li>
                            <a href="javascript:;"> <span> <svg viewBox="0 0 25 48" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                  <g id="Page-11" stroke="none">
                                    <g id="Social-Icons---Isolated" transform="translate(-176.000000, -55.000000)">
                                      <path
                                        d="M200.78439,55.3395122 L200.78439,62.9141463 L196.28878,62.9258537 C192.764878,62.9258537 192.085854,64.6 192.085854,67.0468293 L192.085854,72.4673171 L200.48,72.4673171 L199.39122,80.9434146 L192.085854,80.9434146 L192.085854,103 L183.329951,103 L183.329951,80.9434146 L176,80.9434146 L176,72.4673171 L183.329951,72.4673171 L183.329951,66.2156098 C183.329951,58.9570732 187.754146,55 194.24,55 C197.331902,55 200,55.2341463 200.78439,55.3395122 Z"
                                        id="Facebook3"></path>
                                    </g>
                                  </g>
                                </svg></span> </a>
                          </li>
                          <li>
                            <a href="javascript:;"> <span><svg version="1.1" id="Capa_21"
                                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                  y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                                  xml:space="preserve">
                                  <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
                                                   c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
                                                   c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
                                                   c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
                                                   c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
                                                   c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
                                                   C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
                                                   C480.224,136.96,497.728,118.496,512,97.248z"></path>
                                </svg></span> </a>
                          </li>
                          <li>
                            <a href="javascript:;"> <span>
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="m75 512h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0">
                                  </path>
                                  <path
                                    d="m256 391c74.4375 0 135-60.5625 135-135s-60.5625-135-135-135-135 60.5625-135 135 60.5625 135 135 135zm0-240c57.898438 0 105 47.101562 105 105s-47.101562 105-105 105-105-47.101562-105-105 47.101562-105 105-105zm0 0">
                                  </path>
                                  <path
                                    d="m406 151c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0">
                                  </path>
                                </svg>
                              </span></a>
                          </li>
                        </ul>
                      </div>
                      <p>Do have an account? <RouterLink to="auth/login">Sign In now!</RouterLink>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="login-img">
                  <img src="@/assets/images/login-side.png" alt="img">
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

          <div class="signin-wrapper">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                <div class="left-side">
                  <h4>Sign Up as Company</h4>
                  <form>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="text" placeholder="Full Name">
                        <span><i class="fa fa-user" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="email" placeholder="Email">
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="text" placeholder="Address">
                        <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="text" placeholder="Phone">
                        <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                      </div>
                    </div>

                    <!--  -->

                    <div class="form-group dekstop-hidden field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="text" placeholder="Username">
                        <span><i class="fa fa-user" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="form-group dekstop-hidden field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="email" placeholder="Category">
                        <span><i class="fa fa-globe" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="form-group dekstop-hidden field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="password" placeholder="Password">
                        <span><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="form-group dekstop-hidden field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="text" placeholder="Re-type Password">
                        <span><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                      </div>
                    </div>

                    <div class="cond">
                      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                      <label for="vehicle1"> Yes, I understand and agree to the Terms & Conditions.</label>
                    </div>


                    <div class="login-btn-sec">
                      <a class="sub-btn" href="javascript:;"><span>Sign Up</span></a>
                      <div class="social-btn">
                        <span>- OR -</span>
                        <ul>
                          <li>
                            <a href="javascript:;"> <span> <svg viewBox="0 0 25 48" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                  <g id="Page-1" stroke="none">
                                    <g id="Social-Icons---Isolated2" transform="translate(-176.000000, -55.000000)">
                                      <path
                                        d="M200.78439,55.3395122 L200.78439,62.9141463 L196.28878,62.9258537 C192.764878,62.9258537 192.085854,64.6 192.085854,67.0468293 L192.085854,72.4673171 L200.48,72.4673171 L199.39122,80.9434146 L192.085854,80.9434146 L192.085854,103 L183.329951,103 L183.329951,80.9434146 L176,80.9434146 L176,72.4673171 L183.329951,72.4673171 L183.329951,66.2156098 C183.329951,58.9570732 187.754146,55 194.24,55 C197.331902,55 200,55.2341463 200.78439,55.3395122 Z"
                                        id="Facebook2"></path>
                                    </g>
                                  </g>
                                </svg></span> </a>
                          </li>
                          <li>
                            <a href="javascript:;"> <span><svg version="1.1" id="Capa_22"
                                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                  y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                                  xml:space="preserve">
                                  <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
                                                   c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
                                                   c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
                                                   c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
                                                   c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
                                                   c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
                                                   C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
                                                   C480.224,136.96,497.728,118.496,512,97.248z"></path>
                                </svg></span> </a>
                          </li>
                          <li>
                            <a href="javascript:;"> <span>
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="m75 512h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0">
                                  </path>
                                  <path
                                    d="m256 391c74.4375 0 135-60.5625 135-135s-60.5625-135-135-135-135 60.5625-135 135 60.5625 135 135 135zm0-240c57.898438 0 105 47.101562 105 105s-47.101562 105-105 105-105-47.101562-105-105 47.101562-105 105-105zm0 0">
                                  </path>
                                  <path
                                    d="m406 151c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0">
                                  </path>
                                </svg>
                              </span></a>
                          </li>
                        </ul>
                      </div>
                      <p>Do have an account? <RouterLink to="auth/login">Sign In now!</RouterLink>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="right-side">
                  <form>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="text" placeholder="Username">
                        <span><i class="fa fa-user" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="email" placeholder="Category">
                        <span><i class="fa fa-globe" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="password" placeholder="Password">
                        <span><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    <div class="form-group field-icon row mb-3">
                      <div class="col-md-12">
                        <input type="text" placeholder="Re-type Password">
                        <span><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="footer-form">
        <p>© Copyright 2020. All Rights Reserved by Webstrot</p>
      </div>
    </div>
  </div>
</template>