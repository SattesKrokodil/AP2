// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('raw_resin', item => {
      item.displayName('Raw Resin').tooltip("This is a test item.")
	})
	
			event.create('sewers_core', item => {
      item.displayName('Sewers Core').tooltip("Used to buy rooms and connectors")
	})
	
			event.create('ruins_core', item => {
      item.displayName('Ruins Core').tooltip("Used to buy rooms and connectors.")
	})
	
		event.create('sw_connector', item => {
      item.displayName('SW Connector').tooltip("This is a test item.")
	})
			event.create('cross_connector', item => {
      item.displayName('CROSS Connector').tooltip("This is a test item.")
	})
			event.create('ew_connector', item => {
      item.displayName('EW Connector').tooltip("This is a test item.")
	})
			event.create('ne_connector', item => {
      item.displayName('NE Connector').tooltip("This is a test item.")
	})
			event.create('ns_connector', item => {
      item.displayName('NS Connector').tooltip("This is a test item.")
	})
			event.create('nw_connector', item => {
      item.displayName('NW Connector').tooltip("This is a test item.")
	})
			event.create('room', item => {
      item.displayName('Room').tooltip("This is a test item.")
	})
			event.create('se_connector', item => {
      item.displayName('SE Connector').tooltip("This is a test item.")
	})
	
		event.create('resin_flask', item => {
      item.displayName('Resin').tooltip("Nom nom")
	})
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})