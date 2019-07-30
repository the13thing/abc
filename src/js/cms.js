import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ValuesPreview from "./cms-preview-templates/values";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("news", PostPreview);
CMS.registerPreviewTemplate("companies", ValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("about", ContactPreview);
CMS.registerWidget("color", ColorControl);
