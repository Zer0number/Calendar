document.addEventListener('DOMContentLoaded', () => {
	var gridColumns = document.getElementsByClassName("grid-col-main");

	var colCount = 0;
	//build one column function
	function buildColumn(height, column){
		let html = `
		<div class="column-chart" id="col-${colCount}">
            <style>
			#col-${colCount} {
				height: ${height}px;
				position: absolute;
				left: 0;
			}
			</style>
        </div>`
		colCount++

		gridColumns[column].innerHTML += html;
	}

	var blockCount = 0;
	//create device block function
	function buildBlock(hourStart, hourEnd, deviceName, consumption, isOverLimit, verticalOffset){
		var blockWidthMult = hourEnd - hourStart; //block width multiplier - (100 * blockWidthMult)% of col width
		var colStart = Math.floor(hourStart); //find starting col
		var horizontalOffset = (hourStart - colStart) * 100; //offset from left side of starting col

		//if is over limit - bgc red
		if(isOverLimit){
			let html = `
			<div class="grid-block-wrapper" id="block-${blockCount}">
				<div class="grid-block grid-block-active">
					<h6>${deviceName}</h6>
					<span>${blockWidthMult} год. / ${consumption / 100} kW</span>
					<style>
					#block-${blockCount} {
						height: ${consumption}px;
						width: ${100 * blockWidthMult}%;
						position: absolute;
						left: ${horizontalOffset}%;
						bottom: ${verticalOffset}px;
					}
					</style>
				</div>
			</div>`
			blockCount++

			gridColumns[colStart].innerHTML += html;
		}
		else{
			let html = `
			<div class="grid-block-wrapper" id="block-${blockCount}">
				<div class="grid-block">
					<h6>${deviceName}</h6>
					<span>${blockWidthMult} год. / ${consumption / 100} kW</span>
					<style>
					#block-${blockCount} {
						height: ${consumption}px;
						width: ${100 * blockWidthMult}%;
						position: absolute;
						left: ${horizontalOffset}%;
						bottom: ${verticalOffset}px;
					}
				</style>
				</div>
			</div>`
			blockCount++

			gridColumns[colStart].innerHTML += html;
		}
	}

	buildColumn(130, 0);
	buildColumn(130, 1);
	buildColumn(130, 2);
	buildColumn(150, 3);
	buildColumn(150, 4);
	buildColumn(210, 5);
	buildColumn(220, 6);
	buildColumn(220, 7);
	buildColumn(225, 8);
	buildColumn(225, 9);
	buildColumn(215, 10);
	buildColumn(220, 11);
	buildColumn(220, 12);
	buildColumn(310, 13);
	buildColumn(310, 14);
	buildColumn(310, 15);
	buildColumn(300, 16);
	buildColumn(230, 17);
	buildColumn(215, 18);
	buildColumn(210, 19);
	buildColumn(180, 20);
	buildColumn(170, 21);
	buildColumn(170, 22);
	buildColumn(170, 23);

	buildBlock(5, 7.5, 'Бойлер', 200, false, 0);
	buildBlock(8, 9.5, 'Духовка', 100, false, 0);
	buildBlock(10.5, 12.5, 'Пральна машина', 150, false, 0);
	buildBlock(11, 12.5, 'Бойлер', 100, true, 150);
	buildBlock(15, 17, 'Насос', 300, false, 0);
	buildBlock(17, 20, 'Полив', 100, false, 0);
	buildBlock(17, 19, 'Духовка', 100, false, 100);
	buildBlock(21.5, 23, 'Бойлер', 200, true, 0);
})
