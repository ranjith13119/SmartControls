sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"SmartTable/SmartControl/model/models",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, Filter, FilterOperator, models, JSONModel) {
	"use strict";
	return Controller.extend("SmartTable.SmartControl.controller.Master", {
		onInit: function () {
			// My First SmartControl Tutorial
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		onSmartFormPress: function (oEvent) {

			var oItem = oEvent.getSource(),
				sPath = oItem.getBindingContext().sPath.split("'")[1];
			this.oRouter.navTo("smartForm", {
				prdID: sPath
			});
		},
		onTollbarPress: function () {
				alert("This is a Press Event")
			}
			/*	onInit: function () {
					this._oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this.getView()));
					this._oRouter = this._oComponent.getRouter();
					that = this;
					that.count = 0;
					that.smartTable = this.getView().byId("peopleList");
					that.smartFilter = this.getView().byId("smartFilterBar");
					// this.getView().byId("foo").onsapenter = function () {
					// 	that.onSearch();
					// };
					var oCurrecyTypeModel = new JSONModel({
						FixedValues: [{
							key: 1,
							value: "USD"
						}, {
							key: 2,
							value: "INR"
						}]
					});
					this.getView().setModel(oCurrecyTypeModel, "jsonModel");
					that.oView = this.smartFilter;

					// this.getOwnerComponent().getModel().metadataLoaded().then(function (oEvent) {
					// 	if (that.getModel.getServiceMetadata() && that.getModel.getServiceMetadata().dataServices.schema[0].entityType) {
					// 		var entityType = that.getModel.getServiceMetadata().dataServices.schema[0].entityType;
					// 		entityType.map(function (e) {
					// 			if (e.name === "Product" || e.name === "BusinessPartner") {
					// 				e.property.map(function (p) {
					// 					if (p.extensions) {
					// 						var ex = p.extensions;
					// 						if (!(ex.some(ex => ex.name === "filterable"))) {
					// 							p.extensions.push({
					// 								name: "filterable",
					// 								value: "false",
					// 								namespace: "http://www.sap.com/Protocols/SAPData"
					// 							});
					// 						} else {
					// 							p.extensions.map(function (extention) {
					// 								if (extention.name === "filterable") {
					// 									extention.value = "false";
					// 								}
					// 							})
					// 						}
					// 					} else {
					// 						p.extensions = [{
					// 							name: "filterable",
					// 							value: "false",
					// 							namespace: "http://www.sap.com/Protocols/SAPData"
					// 						}];
					// 					}
					// 				});
					// 			}
					// 		});
					// 	}
					// });
				},*/
			/*	onClear: function (oEvent) {
				var oItems = that.smartFilter.getAllFilterItems(true);
				for (var i = 0; i < oItems.length; i++) {
					var oControl = that.smartFilter.determineControlByFilterItem(oItems[i]);
					if (oControl) {
						oControl.setValue("");
					}
				}
			},
			filterTable: function (aFilters) {
				that.smartTable.getBinding("items").filter(aFilters);
			},
			onSearch: function (oEvent) {
				if (that.smartFilter.isDialogOpen()) {
					if (that.count < 1) {
						that.count++;
						var id = that.smartFilter._oFilterDialog._oToolbar._aAllCollections[1][1];
						id.firePress();
						return;
					} else {
						that.count = 0;
					}
				}
					var date1 = that.oView.getControlByKey("DatePicker1").getValue(),
						sCode = that.oView.getControlByKey("myOwn").getSelectedKey(),
						sInput1 = that.oView.getControlByKey("input1").getValue(),
						sInput2 = that.oView.getControlByKey("input2").getValue(),
						dateTime = that.oView.getControlByKey("dateTime").getValue(),
						comboBox = that.oView.getControlByKey("ComboBox").getSelectedKey(),
						aFilters = [],
						sCurrenyCode = "USD";
					alert(comboBox)

	
				switch (sCode) {
				case "1":
					sCurrenyCode = "USD";
					break;
				case "2":
					sCurrenyCode = "INR";
					break;
				default:
					sCurrenyCode = "USD";
					break;
				}
				var aFilters = [],
				if (date1) {
					aFilters.push(new Filter({
						path: "CreatedAt",
						operator: FilterOperator.BT,
						value1: "2019-08-07T02:01:05.0000000" || date1,
						value2: "2019-09-07T02:01:05.0000000"
					}));
				}
				if (sInput1) {
					aFilters.push(new Filter({
						path: "ProductID",
						operator: FilterOperator.EQ,
						value1: sInput1
					}));
				}
				if (sInput2) {
					aFilters.push(new Filter({
						path: "SupplierName",
						operator: FilterOperator.EQ,
						value1: sInput2
					}));
				}
				that.smartTable.getBinding("items").filter(aFilters);
			},
			onSort: function () {
				if (this.smartTable) {
					this.smartTable.openPersonalisationDialog("Sort");
				}
			},
			onFilter: function () {
				if (this.smartTable) {
					this.smartTable.openPersonalisationDialog("Filter");
				}
			},
			onGroup: function () {
				MessageToast.show("Not available as this feature is disabled for this app in the view.xml");
			},
			onColumns: function () {
				if (this.smartTable) {
					this.smartTable.openPersonalisationDialog("Columns");
				}
			},

			check: function (oEvent) {
				//alert("true");
			},
			formatRowHighlight: function (oValue) {
				if (oValue > 0 && oValue < 2) {
					return "Error";
				} else if (oValue > 2 && oValue < 3) {
					return "Warning";
				} else if (oValue > 3 && oValue < 4) {
					return "Success";
				}
				return "None";
			},
			onSmartFormPress: function (oEvent) {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("smartForm");
			},
			onSelectionChangeChange: function (oEvent) {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("smartForm");
			},
			change: function () {
				alert("Change event triggered");
			},
			pendingChange: function () {
				alert("asdf");
			},
			onBeforeRebindTable: function (oEvent) {
				// var mBindingParams = oEvent.getParameter("bindingParams");
				// var oSmtFilter = this.getView().byId("smartFilterBar");
				// var oSelect = oSmtFilter.getControlByKey("MyOwnFilterField");
				// var sVariant = oSelect.getSelectedKey();

				// var newFilter = new sap.ui.model.Filter("Variant", sap.ui.model.FilterOperator.EQ, sVariant);
				// mBindingParams.filters.push(newFilter);
				alert("er")

			},
			initialise: function () {
				alert("for initialise chk");
			}*/

		// onSearch: function (oEvent) {
		// 	var date1 = that.oView.getControlByKey("DatePicker1").getValue(),
		// 		date2 = that.oView.getControlByKey("DatePicker2").getValue(),
		// 		sCode = that.oView.getControlByKey("myOwn").getSelectedKey(),
		// 		sInput1 = that.oView.getControlByKey("input1").getValue(),
		// 		sInput2 = that.oView.getControlByKey("input2").getValue(),
		// 		dateTime = that.oView.getControlByKey("dateTime").getValue(),
		// 		//	aFilters =  oEvent.getSource().getFilters() || [],
		// 		aFilters = [],
		// 		sCurrenyCode = "USD";

		// 	switch (sCode) {
		// 	case "1":
		// 		sCurrenyCode = "USD";
		// 		break;
		// 	case "2":
		// 		sCurrenyCode = "INR";
		// 		break;
		// 	default:
		// 		sCurrenyCode = "USD";
		// 		break;
		// 	}
		// 	// aFilters.push(new Filter({
		// 	// 	path: "CurrencyCode",
		// 	// 	operator: FilterOperator.EQ,
		// 	// 	value1: sCurrenyCode
		// 	// }));
		// 	if (date1 || date2) {
		// 		aFilters.push(new Filter({
		// 			path: "CreatedAt",
		// 			operator: FilterOperator.BT,
		// 			value1: "2019-08-07T02:01:05.0000000" || date1,
		// 			value2: "2019-09-07T02:01:05.0000000" || date2
		// 		}));
		// 	}
		// 	if (sInput1) {
		// 		aFilters.push(new Filter({
		// 			path: "ProductID",
		// 			operator: FilterOperator.EQ,
		// 			value1: sInput1
		// 		}));
		// 	}
		// 	if (sInput2) {
		// 		aFilters.push(new Filter({
		// 			path: "SupplierName",
		// 			operator: FilterOperator.EQ,
		// 			value1: sInput2
		// 		}));
		// 	}
		// 	// aFilters = new Filter({
		// 	// 	filters: [
		// 	// 		new Filter({
		// 	// 			path: "CreatedAt",
		// 	// 			operator: FilterOperator.BT,
		// 	// 			value1: "2019-08-07T02:01:05.0000000" || date1,
		// 	// 			value2: "2019-09-07T02:01:05.0000000" || date2
		// 	// 		}),
		// 	// 		new Filter({
		// 	// 			path: "CurrencyCode",
		// 	// 			operator: FilterOperator.EQ,
		// 	// 			value1: sCurrenyCode
		// 	// 		}),
		// 	// 		new Filter({
		// 	// 			path: "ProductID",
		// 	// 			operator: FilterOperator.EQ,
		// 	// 			value1: sInput1
		// 	// 		}),
		// 	// 		new Filter({
		// 	// 			path: "SupplierName",
		// 	// 			operator: FilterOperator.EQ,
		// 	// 			value1: sInput2
		// 	// 		})
		// 	// 	],
		// 	// 	and: true
		// 	// });

		// 	if (that.smartFilter.isDialogOpen()) {
		// 		if (that.count < 1) {
		// 			that.count++;
		// 			var id = that.smartFilter._oFilterDialog._oToolbar._aAllCollections[1][1];
		// 			id.firePress();
		// 			this.filterTable(aFilters);
		// 		} else {
		// 			that.count = 0;
		// 		}
		// 	} else {
		// 		this.filterTable(aFilters);
		// 	}

		// 	// aFilters.push(new Filter({
		// 	// 	path: "CreatedAt",
		// 	// 	operator: FilterOperator.BT,
		// 	// 	value1: "2019-08-07T02:01:05.0000000" || date1,
		// 	// 	value2: "2019-09-07T02:01:05.0000000" || date2
		// 	// }));

		// 	// if (aFilters && aFilters[0]) {
		// 	// 	aFilters[0].aFilters.push(new Filter({
		// 	// 		path: "CreatedAt",
		// 	// 		operator: FilterOperator.BT,
		// 	// 		value1: "2019-08-07T02:01:05.0000000" || date1,
		// 	// 		value2: "2019-09-07T02:01:05.0000000" || date2
		// 	// 	}));
		// 	// 	switch (sCode) {
		// 	// 	case "1":
		// 	// 		aFilters[0].aFilters.push(new Filter("CurrencyCode", "EQ", "USD"));
		// 	// 		break;
		// 	// 	case "2":
		// 	// 		aFilters[0].aFilters.push(new Filter("CurrencyCode", "EQ", "INR"));
		// 	// 		break;
		// 	// 	default:
		// 	// 		break;
		// 	// 	}

		// 	// } else {
		// 	// 	aFilters.push(new Filter({
		// 	// 		path: "CreatedAt",
		// 	// 		operator: FilterOperator.BT,
		// 	// 		value1: "2019-08-07T02:01:05.0000000" || date1,
		// 	// 		value2: "2019-09-07T02:01:05.0000000" || date2
		// 	// 	}));
		// 	// 	switch (sCode) {
		// 	// 	case "1":
		// 	// 		aFilters.push(new Filter("CurrencyCode", "EQ", "USD"));
		// 	// 		break;
		// 	// 	case "2":
		// 	// 		aFilters.push(new Filter("CurrencyCode", "EQ", "INR"));
		// 	// 		break;
		// 	// 	default:
		// 	// 		break;
		// 	// 	}
		// 	// }

		// 	// that.smartTable.getBinding("items").filter(aFilters);
		// 	// if (that.smartFilter.isDialogOpen()) {
		// 	// 	var id = oEvent.getSource()._oFilterDialog._oToolbar._aAllCollections[1][1];
		// 	// 	id.firePress();

		// 	// 	//	oEvent.getSource()._oFilterDialog.close();
		// 	// 	//	oEvent.getSource().setFilters(oEvent.getSource().getFilters());
		// 	// 	//console.log(oEvent)
		// 	// 	//	that.oView = this.getView().byId("smartFilterBar").getFilters();
		// 	// 	//	alert(that.oView.getControlByKey("myOwn").getSelectedKey());
		// 	// 	//	alert(that.oView.getControlByKey("Category").getValue());
		// 	// 	//	alert(that.oView.getControlByKey("ProductID").getValue());
		// 	// 	//	var oValue = oEvent.getSource().getFilterData()
		// 	// }

		// 	// if(oEvent.getSource()._oFilterDialog) {
		// 	// //	oEvent.getSource()._oFilterDialog.close();
		// 	// //	that.smartFilter.attachFiltersDialogSearch();

		// 	// }
		// },
	});

});