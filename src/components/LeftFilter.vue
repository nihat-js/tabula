<template>
  <div class="col-lg-4 col-md-4 col-sm-12 col-12">
    <div class="sidebar_widget pb-0">
      <h4 class="title-sidebar">Start Your Search</h4>
      <div class="select-box">
        <input type="text" placeholder="select category">
        <button><i class="fas fa-search"></i></button>
      </div>
    </div>
    <div class="sidebar_widget pb-0">
      <h4 class="title-sidebar">Job Type</h4>
      <div class="freelauncer-select-box">
        <div class="form-group">
          <input type="checkbox" id="job1">
          <label for="job1">Onsite</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="job2">
          <label for="job2">Partial Onsite</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="job3">
          <label for="job3">Remote</label>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="sidebar_widget pb-0">
      <h4 class="title-sidebar">Price Type</h4>
      <div class="freelauncer-select-box">
        <div class="form-group">
          <input type="checkbox" id="price1">
          <label for="price1">All</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="price2">
          <label for="price2">Fixed Project</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="price3">
          <label for="price3">Hourly Based Project</label>
        </div>

        <div class="price-range-slider">
          <div id="slider-range"
            class="range-bar ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
            <div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 0%; width: 32.4324%;"></div><span
              tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;"></span><span
              tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 32.4324%;"></span>
          </div>
          <p class="range-value">
            <input type="text" id="amount" readonly="">
          </p>
        </div>

      </div>
    </div>
    <!--  -->
    <div class="sidebar_widget">
      <h4 class="title-sidebar">Project Length</h4>
      <div class="custom-check">
        <div class="form-group">
          <input type="checkbox" id="rmonth1">
          <label for="rmonth1">01 to 03 months</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="month2">
          <label for="month2">03 to 06 months</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="month3">
          <label for="month3">Less than a month</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="rmonth2">
          <label for="rmonth2">Less than a week</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="month5">
          <label for="month5">More than 06 months</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="month6">
          <label for="month6">03 to 06 months</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="month7">
          <label for="month7">03 to 06 months</label>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="sidebar_widget pb-0">
      <h4 class="title-sidebar">Freelancer Type</h4>
      <div class="freelauncer-select-box">
        <div class="form-group">
          <input type="checkbox" id="free1">
          <label for="free1">Agency Freelancers</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="free2">
          <label for="free2">Independent Freelancers</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="free3">
          <label for="free3">New Rising Talent</label>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="sidebar_widget">
      <h4 class="title-sidebar">Categories</h4>
      <div class="custom-check">
        <div class="form-group">
          <input type="checkbox" id="cate1">
          <label for="cate1">Business</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="cate2">
          <label for="cate2">Digital Marketing</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="cate3">
          <label for="cate3">Programming &amp; Tech</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="cate4">
          <label for="cate4">Mobiles</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="cate5">
          <label for="cate5">Music &amp; Audio</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="cate6">
          <label for="cate6">Headphone</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="cate7">
          <label for="cate7">Threater</label>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="sidebar_widget">
      <h4 class="title-sidebar">Skills</h4>
      <div class="custom-check">
        <div class="form-group">
          <input type="checkbox" id="andro">
          <label for="andro">Android</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="api">
          <label for="api">API</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="code">
          <label for="code">C++</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="con">
          <label for="con">Content Writing</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="css">
          <label for="css">Css</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="java">
          <label for="java">java</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="word">
          <label for="word">Wordpress</label>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="sidebar_widget">
      <h4 class="title-sidebar">Location</h4>
      <div class="custom-check">
        <div class="form-group">
          <input type="checkbox" id="aus">
          <label for="aus"> <span> <img src="@/assets/images/aus.png" alt="img"> </span> Austraila</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="india">
          <label for="india"> <span> <img src="@/assets/images/india.png" alt="img"> </span> India</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="canada">
          <label for="canada"> <span> <img src="@/assets/images/can.png" alt="img"> </span> Canada</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="uni">
          <label for="uni"> <span> <img src="@/assets/images/uk.png" alt="img"> </span> United Kingdom</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="united">
          <label for="united"> <span> <img src="@/assets/images/us.png" alt="img"> </span> United States</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="mala">
          <label for="mala"> <span> <img src="@/assets/images/aus.png" alt="img"> </span> Malasiya</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="dubai">
          <label for="dubai"> <span> <img src="@/assets/images/aus.png" alt="img"> </span> Dubai</label>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="sidebar_widget">
      <h4 class="title-sidebar">Languages</h4>
      <div class="custom-check">
        <div class="form-group">
          <input type="checkbox" id="lan1">
          <label for="lan1"> Abkhazian</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="lan2">
          <label for="lan2"> Afar</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="lan3">
          <label for="lan3"> Affricaans</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="lan4">
          <label for="lan4"> Akan</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="lan5">
          <label for="lan5"> Albanian</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="lan6">
          <label for="lan6"> Hindi</label>
        </div>
        <div class="form-group">
          <input type="checkbox" id="lan7">
          <label for="lan7"> English</label>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="sidebar_text">
      <p>Click “Apply Filter” to apply latest changes made by you.</p>
      <a class="custom-btn" href="javascript:;"> <span>Apply Filters</span> </a>
    </div>
  </div>
</template>

<script setup>
</script>