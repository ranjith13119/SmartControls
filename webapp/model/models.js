sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createFixedValuesModel: function (oBase) {
			var oCurrecyTypeModel = new JSONModel({
				FixedValues: [{
					key: 1,
					value: "USD"
				}, {
					key: 2,
					value: "INR"
				}]
			});
			oCurrecyTypeModel.setDefaultBindingMode("OneWay");
			oBase.updateBindings(true);
			return oCurrecyTypeModel;
		}

	};
});