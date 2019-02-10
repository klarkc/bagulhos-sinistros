const { defineFeature, loadFeature } = require('jest-cucumber');

const feature = loadFeature('./features/serie_interativa_bagulhos_sinistros.feature');

defineFeature(feature, test => {
    // test('Something', ({ given, when, then }) => {

    // });
});