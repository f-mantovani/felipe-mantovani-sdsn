const goalsBackgrounds: { code: number; color: string }[] = [
	{ code: 1, color: "#E5243B" },
	{ code: 2, color: "#DDa63a" },
	{ code: 3, color: "#4c9f38" },
	{ code: 4, color: "#c5192D" },
	{ code: 5, color: "#ff3a21" },
	{ code: 6, color: "#26BDE2" },
	{ code: 7, color: "#fcc30B" },
	{ code: 8, color: "#a21942" },
	{ code: 9, color: "#fD6925" },
	{ code: 10, color: "#DD1367" },
	{ code: 11, color: "#fD9D24" },
	{ code: 12, color: "#Bf8B2E" },
	{ code: 13, color: "#3f7E44" },
	{ code: 14, color: "#0a97D9" },
	{ code: 15, color: "#56c02B" },
	{ code: 16, color: "#00689D" },
	{ code: 17, color: "#19486a" },
  ];
  
  import Color from "color";
  
  describe("Home page", () => {
	it("should navigate to the home page", () => {
	  cy.visit("/");
  
	  cy.get("h1").contains("Pathways to Progress");
	});
  
	it("should have 17 icons", () => {
	  cy.get("[data-cy-goal]").should("have.length", 17);
	});
  
	it("should check the background color of the icons", () => {
	  cy.get("img[data-cy-goal-img]").each(($el) => {
		const color = $el.css("background-color");
		const goalCode = $el.attr("data-cy-goal-img");
		let desiredColor;
		if (goalCode) {
		  desiredColor = goalsBackgrounds
			.find(({ code }) => code == +goalCode)
			?.color.toUpperCase();
		}

		const colorHex = Color(color).hex().toUpperCase();

		expect(colorHex).equal(desiredColor);
	  });
	});
  });