sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("SmartTable.SmartControl.controller.smartForm", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf SmartTable.SmartControl.view.smartForm
		 */

		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.attachRoutePatternMatched(this.onRoutePatternMatched, this);

		},
		onRoutePatternMatched: function (oEvent) {
				var oArgs =  oEvent.getParameter("arguments"),
					sPath = oArgs.prdID;
				this.getView().byId("smartForm").bindElement("/ProductSet('" + sPath + "')");
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf SmartTable.SmartControl.view.smartForm
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf SmartTable.SmartControl.view.smartForm
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf SmartTable.SmartControl.view.smartForm
		 */
		//	onExit: function() {
		//
		//	}

	});

});