// Generated by https://quicktype.io

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
function toUser(json) {
  return cast(JSON.parse(json), r("User"));
}

function userToJson(value) {
  return JSON.stringify(uncast(value, r("User")), null, 2);
}

function invalidValue(typ, val) {
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ) {
  if (typ.jsonToJS === undefined) {
    var map = {};
    typ.props.forEach((p) => map[p.json] = { key: p.js, typ: p.typ });
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ) {
  if (typ.jsToJSON === undefined) {
    var map = {};
    typ.props.forEach((p) => map[p.js] = { key: p.json, typ: p.typ });
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val, typ, getProps) {
  function transformPrimitive(typ, val) {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val);
  }

  function transformUnion(typs, val) {
    // val must validate against one typ in typs
    var l = typs.length;
    for (var i = 0; i < l; i++) {
      var typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases, val) {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ, val) {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue("array", val);
    return val.map(el => transform(el, typ, getProps));
  }

  function transformObject(props, additional, val) {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue("object", val);
    }
    var result = {};
    Object.getOwnPropertyNames(props).forEach(key => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps);
    });
    Object.getOwnPropertyNames(val).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === "object" && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val);
  }
  return transformPrimitive(typ, val);
}

function cast(val, typ) {
  return transform(val, typ, jsonToJSProps);
}

function uncast(val, typ) {
  return transform(val, typ, jsToJSONProps);
}

function a(typ) {
  return { arrayItems: typ };
}

function u(...typs) {
  return { unionMembers: typs };
}

function o(props, additional) {
  return { props, additional };
}

function m(additional) {
  return { props: [], additional };
}

function r(name) {
  return { ref: name };
}

const typeMap = {
  "User": o([
    { json: "id", js: "id", typ: 0 },
    { json: "ip_address", js: "ip_address", typ: "" },
    { json: "username", js: "username", typ: "" },
    { json: "salt", js: "salt", typ: null },
    { json: "email", js: "email", typ: u(null, "") },
    { json: "activation_code", js: "activation_code", typ: null },
    { json: "forgotten_password_code", js: "forgotten_password_code", typ: null },
    { json: "forgotten_password_time", js: "forgotten_password_time", typ: null },
    { json: "remember_code", js: "remember_code", typ: null },
    { json: "created_on", js: "created_on", typ: 0 },
    { json: "last_login", js: "last_login", typ: u(0, null) },
    { json: "active", js: "active", typ: 0 },
    { json: "first_name", js: "first_name", typ: "" },
    { json: "last_name", js: "last_name", typ: "" },
    { json: "phone", js: "phone", typ: u(null, "") },
    { json: "fr_code", js: "fr_code", typ: "" },
    { json: "address", js: "address", typ: u(null, "") },
    { json: "city", js: "city", typ: u(null, "") },
    { json: "state", js: "state", typ: u(null, "") },
    { json: "zip", js: "zip", typ: u(null, "") },
    { json: "country", js: "country", typ: u(null, "") },
    { json: "company", js: "company", typ: u(null, "") },
    { json: "gender", js: "gender", typ: null },
    { json: "in_service", js: "in_service", typ: null },
    { json: "dob", js: "dob", typ: u(null, "") },
    { json: "origin", js: "origin", typ: null },
    { json: "salesforce_worker_id", js: "salesforce_worker_id", typ: null },
    { json: "salesforce_user_id", js: "salesforce_user_id", typ: null },
    { json: "salesforce_team_id", js: "salesforce_team_id", typ: "" },
    { json: "salesforce_profile_id", js: "salesforce_profile_id", typ: null },
    { json: "salesforce_contact_id", js: "salesforce_contact_id", typ: null },
    { json: "laps", js: "laps", typ: null },
    { json: "original_laps_count", js: "original_laps_count", typ: null },
    { json: "laps_modified_by_user_id", js: "laps_modified_by_user_id", typ: null },
    { json: "laps_modified_ts", js: "laps_modified_ts", typ: null },
    { json: "api_token", js: "api_token", typ: null },
    { json: "registered", js: "registered", typ: 0 },
    { json: "waiver_signed", js: "waiver_signed", typ: 0 },
    { json: "waiver_dob", js: "waiver_dob", typ: u(null, "") },
    { json: "waiver_ts", js: "waiver_ts", typ: u(null, "") },
    { json: "deleted", js: "deleted", typ: 0 },
    { json: "ts_laps_entered", js: "ts_laps_entered", typ: null },
    { json: "flagging_mode_id", js: "flagging_mode_id", typ: 0 },
    { json: "block_collection_reminder", js: "block_collection_reminder", typ: 0 },
    { json: "reg_code_temp_user", js: "reg_code_temp_user", typ: 0 },
    { json: "email_opt_out", js: "email_opt_out", typ: 0 },
    { json: "public_pledger", js: "public_pledger", typ: 0 },
    { json: "requested_pay_later_override", js: "requested_pay_later_override", typ: null },
    { json: "created_at", js: "created_at", typ: u(null, "") },
    { json: "updated_at", js: "updated_at", typ: u(null, "") },
    { json: "deleted_at", js: "deleted_at", typ: null },
    { json: "marketing_opt_in_ts", js: "marketing_opt_in_ts", typ: null },
    { json: "school", js: "school", typ: u(r("School"), null) },
    { json: "roles", js: "roles", typ: u(undefined, a(r("Role"))) },
    { json: "participants", js: "participants", typ: u(undefined, a(r("User"))) },
    { json: "participant_info", js: "participant_info", typ: u(r("ParticipantInfo"), null) },
    { json: "pivot", js: "pivot", typ: u(undefined, r("UserPivot")) },
    { json: "profile", js: "profile", typ: u(undefined, r("Profile")) },
    { json: "prizes", js: "prizes", typ: u(undefined, a(r("Prize"))) },
    { json: "special_urls", js: "special_urls", typ: u(undefined, a(r("SpecialURL"))) },
  ], false),
  "ParticipantInfo": o([
    { json: "id", js: "id", typ: 0 },
    { json: "classroom_id", js: "classroom_id", typ: 0 },
    { json: "user_id", js: "user_id", typ: 0 },
    { json: "family_pledging_enabled", js: "family_pledging_enabled", typ: 0 },
    { json: "allow_pay_later_override", js: "allow_pay_later_override", typ: u(0, null) },
    { json: "pledges", js: "pledges", typ: a(r("Pledge")) },
    { json: "potential_sponsors", js: "potential_sponsors", typ: a(r("PotentialSponsor")) },
    { json: "prize_bound_students", js: "prize_bound_students", typ: a(r("PrizeBoundStudent")) },
    { json: "classroom", js: "classroom", typ: r("Classroom") },
  ], false),
  "Classroom": o([
    { json: "id", js: "id", typ: 0 },
    { json: "grade_id", js: "grade_id", typ: 0 },
    { json: "name", js: "name", typ: "" },
    { json: "group_id", js: "group_id", typ: 0 },
    { json: "teacher_id", js: "teacher_id", typ: null },
    { json: "teacher_2_id", js: "teacher_2_id", typ: null },
    { json: "teacher_3_id", js: "teacher_3_id", typ: null },
    { json: "last_updated", js: "last_updated", typ: "" },
    { json: "number_of_participants", js: "number_of_participants", typ: 0 },
    { json: "team_member_code", js: "team_member_code", typ: 0 },
    { json: "team_leader_code", js: "team_leader_code", typ: 0 },
    { json: "pledge_meter", js: "pledge_meter", typ: "" },
    { json: "deleted", js: "deleted", typ: 0 },
    { json: "group", js: "group", typ: r("Group") },
  ], false),
  "Group": o([
    { json: "id", js: "id", typ: 0 },
    { json: "salesforce_id", js: "salesforce_id", typ: "" },
    { json: "name", js: "name", typ: "" },
    { json: "classroom_goal", js: "classroom_goal", typ: null },
    { json: "projected_students", js: "projected_students", typ: null },
    { json: "program_id", js: "program_id", typ: 0 },
    { json: "point_person_id", js: "point_person_id", typ: null },
    { json: "projected_raised_per_student", js: "projected_raised_per_student", typ: null },
    { json: "projected_raised", js: "projected_raised", typ: null },
    { json: "preprogram_students", js: "preprogram_students", typ: null },
    { json: "participating_students", js: "participating_students", typ: null },
    { json: "preprogram_homerooms", js: "preprogram_homerooms", typ: null },
    { json: "preprogram_faculty", js: "preprogram_faculty", typ: null },
    { json: "lap_average", js: "lap_average", typ: null },
    { json: "actual_students", js: "actual_students", typ: null },
    { json: "actual_students_override", js: "actual_students_override", typ: 0 },
    { json: "level", js: "level", typ: "" },
    { json: "pep_rally", js: "pep_rally", typ: null },
    { json: "fun_run", js: "fun_run", typ: null },
    { json: "due_date", js: "due_date", typ: null },
    { json: "populated", js: "populated", typ: null },
    { json: "group_level_id", js: "group_level_id", typ: null },
    { json: "sf_program_id", js: "sf_program_id", typ: "" },
    { json: "sf_point_person_id", js: "sf_point_person_id", typ: null },
    { json: "sf_opportunity_id", js: "sf_opportunity_id", typ: "" },
    { json: "deleted", js: "deleted", typ: 0 },
    { json: "prizes_bound", js: "prizes_bound", typ: a(r("PrizesBound")) },
    { json: "program", js: "program", typ: r("Program") },
  ], false),
  "PrizesBound": o([
    { json: "id", js: "id", typ: 0 },
    { json: "prize_id", js: "prize_id", typ: 0 },
    { json: "display_name", js: "display_name", typ: "" },
    { json: "display_amount", js: "display_amount", typ: "" },
    { json: "actual_amount", js: "actual_amount", typ: "" },
    { json: "group_id", js: "group_id", typ: 0 },
    { json: "pledge_period_ordinal", js: "pledge_period_ordinal", typ: u(0, null) },
    { json: "quantity", js: "quantity", typ: null },
    { json: "activity_reward", js: "activity_reward", typ: u(0, null) },
  ], false),
  "Program": o([
    { json: "id", js: "id", typ: 0 },
    { json: "name", js: "name", typ: "" },
    { json: "school_id", js: "school_id", typ: 0 },
    { json: "preprogram_students_total", js: "preprogram_students_total", typ: null },
    { json: "preprogram_homerooms", js: "preprogram_homerooms", typ: null },
    { json: "projected_students", js: "projected_students", typ: null },
    { json: "projected_raised", js: "projected_raised", typ: 0 },
    { json: "projected_raised_per_student", js: "projected_raised_per_student", typ: null },
    { json: "pep_rally", js: "pep_rally", typ: "" },
    { json: "fun_run", js: "fun_run", typ: "" },
    { json: "due_date", js: "due_date", typ: "" },
    { json: "teacher_party", js: "teacher_party", typ: null },
    { json: "preprogram", js: "preprogram", typ: null },
    { json: "preprogram_fr", js: "preprogram_fr", typ: null },
    { json: "parent_membership", js: "parent_membership", typ: null },
    { json: "teacher_party_location", js: "teacher_party_location", typ: null },
    { json: "preprogram_scheduled", js: "preprogram_scheduled", typ: null },
    { json: "semester", js: "semester", typ: "" },
    { json: "projected_revenue", js: "projected_revenue", typ: null },
    { json: "school_contact_group", js: "school_contact_group", typ: null },
    { json: "pledged", js: "pledged", typ: null },
    { json: "actual_students", js: "actual_students", typ: null },
    { json: "participating_students", js: "participating_students", typ: null },
    { json: "payee", js: "payee", typ: "" },
    { json: "deleted", js: "deleted", typ: 0 },
    { json: "team_id", js: "team_id", typ: 0 },
    { json: "owner_id", js: "owner_id", typ: 0 },
    { json: "sf_opportunity_id", js: "sf_opportunity_id", typ: "" },
    { json: "salesforce_id", js: "salesforce_id", typ: "" },
    { json: "salesforce_team_id", js: "salesforce_team_id", typ: "" },
    { json: "sf_school_id", js: "sf_school_id", typ: "" },
    { json: "sf_owner_id", js: "sf_owner_id", typ: "" },
    { json: "collection_type", js: "collection_type", typ: "" },
    { json: "pledging_start", js: "pledging_start", typ: "" },
    { json: "collection_refer_key", js: "collection_refer_key", typ: "" },
    { json: "sponsor_convenience_fee", js: "sponsor_convenience_fee", typ: "" },
    { json: "optional_sponsor_fee", js: "optional_sponsor_fee", typ: "" },
    { json: "school_processing_fee", js: "school_processing_fee", typ: "" },
    { json: "online_payment_enabled", js: "online_payment_enabled", typ: 0 },
    { json: "hold_online_payments", js: "hold_online_payments", typ: null },
    { json: "daily_pledge_target", js: "daily_pledge_target", typ: 0 },
    { json: "pledge_target", js: "pledge_target", typ: 0 },
    { json: "total_raised_goal", js: "total_raised_goal", typ: 0 },
    { json: "client_percent", js: "client_percent", typ: null },
    { json: "client_goal", js: "client_goal", typ: 0 },
    { json: "archived", js: "archived", typ: 0 },
    { json: "open_help", js: "open_help", typ: 0 },
    { json: "registration_code", js: "registration_code", typ: "" },
    { json: "event_name", js: "event_name", typ: "" },
    { json: "parent_email_prompts", js: "parent_email_prompts", typ: 0 },
    { json: "facebook_share_prize", js: "facebook_share_prize", typ: 0 },
    { json: "restrict_access_prize_reports", js: "restrict_access_prize_reports", typ: null },
    { json: "has_delivered_top_prizes", js: "has_delivered_top_prizes", typ: 0 },
    { json: "online_payment_required", js: "online_payment_required", typ: 0 },
    { json: "filter_merchant_report_by_school", js: "filter_merchant_report_by_school", typ: null },
    { json: "unit_id", js: "unit_id", typ: 0 },
    { json: "has_delivered_teacher_prizes", js: "has_delivered_teacher_prizes", typ: 0 },
    { json: "promote_pay_online", js: "promote_pay_online", typ: 0 },
    { json: "custom_url", js: "custom_url", typ: null },
    { json: "program_type_id", js: "program_type_id", typ: null },
    { json: "unit_range_low", js: "unit_range_low", typ: 0 },
    { json: "unit_max_charge", js: "unit_max_charge", typ: 0 },
    { json: "unit_estimated_average", js: "unit_estimated_average", typ: 0 },
    { json: "unit_flat_conversion", js: "unit_flat_conversion", typ: 0 },
    { json: "show_corporate_matching_widget", js: "show_corporate_matching_widget", typ: null },
    { json: "unit_range_high", js: "unit_range_high", typ: 0 },
    { json: "no_units_entered_default", js: "no_units_entered_default", typ: 0 },
    { json: "microsite", js: "microsite", typ: r("Microsite") },
    { json: "unit", js: "unit", typ: r("Unit") },
    { json: "program_pledge_setting", js: "program_pledge_setting", typ: r("ProgramPledgeSetting") },
  ], false),
  "Microsite": o([
    { json: "id", js: "id", typ: 0 },
    { json: "program_id", js: "program_id", typ: 0 },
    { json: "intro_vid_override", js: "intro_vid_override", typ: "" },
    { json: "video_1", js: "video_1", typ: "" },
    { json: "video_2", js: "video_2", typ: "" },
    { json: "video_3", js: "video_3", typ: "" },
    { json: "video_4", js: "video_4", typ: "" },
    { json: "video_5", js: "video_5", typ: "" },
    { json: "slug", js: "slug", typ: "" },
    { json: "pic_1", js: "pic_1", typ: 0 },
    { json: "pic_2", js: "pic_2", typ: 0 },
    { json: "pic_3", js: "pic_3", typ: null },
    { json: "parents_invited", js: "parents_invited", typ: 0 },
    { json: "last_updated", js: "last_updated", typ: "" },
    { json: "hide_character_videos", js: "hide_character_videos", typ: null },
    { json: "overview_text_override", js: "overview_text_override", typ: "" },
    { json: "school_image_name", js: "school_image_name", typ: "" },
    { json: "color_theme_id", js: "color_theme_id", typ: "" },
    { json: "funds_raised_for", js: "funds_raised_for", typ: "" },
    { json: "get_pledges_vid_override", js: "get_pledges_vid_override", typ: 0 },
  ], false),
  "ProgramPledgeSetting": o([
    { json: "id", js: "id", typ: 0 },
    { json: "program_id", js: "program_id", typ: 0 },
    { json: "flag_high_donation", js: "flag_high_donation", typ: 0 },
    { json: "flag_high_cumulative_per_period", js: "flag_high_cumulative_per_period", typ: 0 },
    { json: "weekend_challenge_amount", js: "weekend_challenge_amount", typ: 0 },
    { json: "flag_high_quantity_per_period", js: "flag_high_quantity_per_period", typ: 0 },
    { json: "flat_donate_only", js: "flat_donate_only", typ: "" },
    { json: "ppu_donations_only", js: "ppu_donations_only", typ: null },
    { json: "flag_payment_scheduled_high_value", js: "flag_payment_scheduled_high_value", typ: 0 },
    { json: "recommended_pledge_amounts", js: "recommended_pledge_amounts", typ: "" },
    { json: "family_pledging_enabled", js: "family_pledging_enabled", typ: 0 },
    { json: "minimize_flat_donation", js: "minimize_flat_donation", typ: 0 },
  ], false),
  "Unit": o([
    { json: "id", js: "id", typ: 0 },
    { json: "title", js: "title", typ: "" },
    { json: "name", js: "name", typ: "" },
    { json: "name_plural", js: "name_plural", typ: "" },
    { json: "modifier", js: "modifier", typ: "" },
    { json: "multiplier_internal", js: "multiplier_internal", typ: 0 },
    { json: "default_multiplier", js: "default_multiplier", typ: 0 },
    { json: "default_lower_limit", js: "default_lower_limit", typ: 0 },
    { json: "default_upper_limit", js: "default_upper_limit", typ: 0 },
    { json: "created_at", js: "created_at", typ: "" },
    { json: "updated_at", js: "updated_at", typ: "" },
    { json: "deleted_at", js: "deleted_at", typ: null },
  ], false),
  "Pledge": o([
    { json: "id", js: "id", typ: 0 },
    { json: "participant_user_id", js: "participant_user_id", typ: 0 },
    { json: "program_id", js: "program_id", typ: 0 },
    { json: "family_pledge_id", js: "family_pledge_id", typ: null },
    { json: "group_id", js: "group_id", typ: 0 },
    { json: "user_id", js: "user_id", typ: 0 },
    { json: "sponsor_type_id", js: "sponsor_type_id", typ: 0 },
    { json: "sponsor_type_other", js: "sponsor_type_other", typ: null },
    { json: "pledge_type_id", js: "pledge_type_id", typ: 0 },
    { json: "business_website", js: "business_website", typ: "" },
    { json: "business_name", js: "business_name", typ: "" },
    { json: "display_business", js: "display_business", typ: 0 },
    { json: "anon", js: "anon", typ: 0 },
    { json: "comment", js: "comment", typ: null },
    { json: "show_comment", js: "show_comment", typ: 0 },
    { json: "anon_first_name", js: "anon_first_name", typ: "" },
    { json: "anon_last_name", js: "anon_last_name", typ: "" },
    { json: "amount", js: "amount", typ: "" },
    { json: "ip_address", js: "ip_address", typ: "" },
    { json: "pledge_status_id", js: "pledge_status_id", typ: 0 },
    { json: "pledge_substatus_id", js: "pledge_substatus_id", typ: 0 },
    { json: "ts_entered", js: "ts_entered", typ: "" },
    { json: "ts_completed", js: "ts_completed", typ: null },
    { json: "entered_by_user_id", js: "entered_by_user_id", typ: null },
    { json: "unflagged_by", js: "unflagged_by", typ: null },
    { json: "deleted", js: "deleted", typ: 0 },
    { json: "protected", js: "protected", typ: 0 },
    { json: "last_modified_by_id", js: "last_modified_by_id", typ: null },
    { json: "ts_updated", js: "ts_updated", typ: "" },
    { json: "ts_confirmed", js: "ts_confirmed", typ: null },
    { json: "ts_deleted", js: "ts_deleted", typ: null },
    { json: "pledge_sponsor_id", js: "pledge_sponsor_id", typ: 0 },
    { json: "payment_id", js: "payment_id", typ: u(0, null) },
    { json: "deleted_at", js: "deleted_at", typ: null },
    { json: "pledge_sponsor", js: "pledge_sponsor", typ: r("PledgeSponsor") },
  ], false),
  "PledgeSponsor": o([
    { json: "id", js: "id", typ: 0 },
    { json: "first_name", js: "first_name", typ: "" },
    { json: "last_name", js: "last_name", typ: "" },
    { json: "phone", js: "phone", typ: "" },
    { json: "email", js: "email", typ: "" },
    { json: "address", js: "address", typ: "" },
    { json: "city", js: "city", typ: "" },
    { json: "state", js: "state", typ: "" },
    { json: "zip", js: "zip", typ: "" },
    { json: "country", js: "country", typ: "" },
    { json: "ts_updated", js: "ts_updated", typ: "" },
    { json: "ts_created", js: "ts_created", typ: "" },
  ], false),
  "PotentialSponsor": o([
    { json: "id", js: "id", typ: 0 },
    { json: "email", js: "email", typ: "" },
    { json: "first_name", js: "first_name", typ: "" },
    { json: "last_name", js: "last_name", typ: "" },
    { json: "participant_user_id", js: "participant_user_id", typ: 0 },
    { json: "sponsor_user_id", js: "sponsor_user_id", typ: 0 },
    { json: "deleted", js: "deleted", typ: 0 },
    { json: "enrollment", js: "enrollment", typ: 0 },
    { json: "day_before_run", js: "day_before_run", typ: 0 },
    { json: "day_after_run", js: "day_after_run", typ: 0 },
    { json: "sender_user_id", js: "sender_user_id", typ: 0 },
    { json: "opt_out", js: "opt_out", typ: 0 },
  ], false),
  "PrizeBoundStudent": o([
    { json: "id", js: "id", typ: 0 },
    { json: "student_id", js: "student_id", typ: 0 },
    { json: "prize_id", js: "prize_id", typ: 0 },
    { json: "status", js: "status", typ: r("Status") },
    { json: "updated_at", js: "updated_at", typ: "" },
  ], false),
  "UserPivot": o([
    { json: "parent_id", js: "parent_id", typ: 0 },
    { json: "student_id", js: "student_id", typ: 0 },
  ], false),
  "Prize": o([
    { json: "id", js: "id", typ: 0 },
    { json: "name", js: "name", typ: "" },
    { json: "inventory_code", js: "inventory_code", typ: "" },
    { json: "picture", js: "picture", typ: "" },
    { json: "video", js: "video", typ: "" },
    { json: "salesforce_id", js: "salesforce_id", typ: null },
    { json: "pivot", js: "pivot", typ: r("PrizePivot") },
  ], false),
  "PrizePivot": o([
    { json: "student_id", js: "student_id", typ: 0 },
    { json: "prize_id", js: "prize_id", typ: 0 },
    { json: "status", js: "status", typ: r("Status") },
  ], false),
  "Profile": o([
    { json: "id", js: "id", typ: 0 },
    { json: "user_id", js: "user_id", typ: 0 },
    { json: "pledge_page_text", js: "pledge_page_text", typ: u(null, "") },
    { json: "video_url", js: "video_url", typ: null },
    { json: "image_name", js: "image_name", typ: u(null, "") },
    { json: "pledge_goal", js: "pledge_goal", typ: "" },
    { json: "created", js: "created", typ: "" },
    { json: "last_updated", js: "last_updated", typ: "" },
    { json: "deleted", js: "deleted", typ: 0 },
    { json: "video_url_orig", js: "video_url_orig", typ: null },
  ], false),
  "Role": o([
    { json: "id", js: "id", typ: 0 },
    { json: "name", js: "name", typ: "" },
    { json: "guard_name", js: "guard_name", typ: "" },
    { json: "created_at", js: "created_at", typ: null },
    { json: "updated_at", js: "updated_at", typ: null },
    { json: "description", js: "description", typ: "" },
    { json: "salesforce_id", js: "salesforce_id", typ: null },
    { json: "type", js: "type", typ: "" },
    { json: "deleted", js: "deleted", typ: 0 },
    { json: "pivot", js: "pivot", typ: r("RolePivot") },
  ], false),
  "RolePivot": o([
    { json: "model_id", js: "model_id", typ: 0 },
    { json: "role_id", js: "role_id", typ: 0 },
    { json: "model_type", js: "model_type", typ: "" },
  ], false),
  "School": o([
    { json: "id", js: "id", typ: 0 },
    { json: "name", js: "name", typ: "" },
    { json: "type", js: "type", typ: "" },
    { json: "address", js: "address", typ: "" },
    { json: "city", js: "city", typ: "" },
    { json: "state", js: "state", typ: "" },
    { json: "zip", js: "zip", typ: "" },
    { json: "country", js: "country", typ: null },
    { json: "charter", js: "charter", typ: "" },
    { json: "school_wide_title_1", js: "school_wide_title_1", typ: "" },
    { json: "urban_locale", js: "urban_locale", typ: null },
    { json: "county", js: "county", typ: "" },
    { json: "latitude", js: "latitude", typ: "" },
    { json: "longitude", js: "longitude", typ: "" },
    { json: "category", js: "category", typ: null },
    { json: "level", js: "level", typ: null },
    { json: "metro_area", js: "metro_area", typ: null },
    { json: "deleted", js: "deleted", typ: 0 },
    { json: "sf_updated_date", js: "sf_updated_date", typ: "" },
    { json: "sf_created_date", js: "sf_created_date", typ: "" },
    { json: "salesforce_id", js: "salesforce_id", typ: "" },
    { json: "abbreviation", js: "abbreviation", typ: null },
    { json: "timezone", js: "timezone", typ: "" },
    { json: "merchant_type", js: "merchant_type", typ: "" },
    { json: "program_id", js: "program_id", typ: 0 },
  ], false),
  "SpecialURL": o([
    { json: "id", js: "id", typ: 0 },
    { json: "user_id", js: "user_id", typ: 0 },
    { json: "referrer_id", js: "referrer_id", typ: 0 },
    { json: "slug", js: "slug", typ: "" },
    { json: "short_key", js: "short_key", typ: "" },
    { json: "referrer", js: "referrer", typ: r("Referrer") },
  ], false),
  "Referrer": o([
    { json: "id", js: "id", typ: 0 },
    { json: "name", js: "name", typ: "" },
    { json: "source", js: "source", typ: "" },
    { json: "medium", js: "medium", typ: r("Medium") },
    { json: "content", js: "content", typ: u(r("Content"), null) },
    { json: "campaign", js: "campaign", typ: r("Campaign") },
  ], false),
  "Status": [
    "delivered",
    "giveaway",
    "pending",
    "unassigned",
  ],
  "Campaign": [
    "createstudentstar",
    "nopledgeafter24_private",
    "nopledgeafter24_public",
    "shareonfacebook",
    "sponsorpayment",
    "sponsorpledgeask",
  ],
  "Content": [
    "nossvideo",
    "ssvideo",
  ],
  "Medium": [
    "email",
    "link",
    "social",
    "text",
  ],
};

module.exports = {
  "userToJson": userToJson,
  "toUser": toUser,
};
