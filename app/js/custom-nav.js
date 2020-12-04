function customeSelect() {
	$('.navigation__holder').each(function () {
		var holder = $(this),
			filterList = holder.find('.navigation__list'),
			listItems = filterList.find('li'),
			activeClass = 'active',
			opener = holder.find('.select-opener'),
			selectOpenClass = 'select-open';

		opener.on('click', function (e) {
			e.preventDefault();
			holder.toggleClass(selectOpenClass);
		});

		filterList.on('click', 'a', function (e) {
			e.preventDefault();
			var link = $(this);

			opener.text(link.text());
			holder.removeClass(selectOpenClass);
			listItems.removeClass(activeClass);
			link.closest('li').addClass(activeClass);
		});

		$(document).on('click touchstart', function (e) {
			var target = $(e.target);

			if (!target.closest(filterList).length && !target.closest(opener).length) {
				holder.removeClass(selectOpenClass);
			}
		});
	});
}

jQuery(function () {
	customeSelect();
});