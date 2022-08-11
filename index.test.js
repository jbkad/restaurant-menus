const {db} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    });

    
        // DONE - write test(1)
    test('can create a Restaurant', async () => {
    const testRestaurant = await Restaurant.create(seedRestaurant[0])
    expect(testRestaurant.name).toEqual(seedRestaurant[0].name)
    });


        // DONE - write test(2)
    test('can create a Menu', async () => {
        const testMenu = await Menu.create(seedMenu[0])
        expect(testMenu.name).toEqual(seedMenu[0].name)
    });


        // TODO - write test(3)
    test('can find Restaurants', async () => {
        const test_ = await _.create(seed_[0])
        expect(test_.name).toEqual(seed_[0].name)
    });


        // TODO - write test(3)
    test('can find Menus', async () => {
        const test_ = await _.create(seed_[0])
        expect(test_.name).toEqual(seed_[0].name)
    });


        // TODO - write test(4)
    test('can delete Restaurants', async () => {
        const test_ = await _.create(seed_[0])
        expect(test_.name).toEqual(seed_[0].name)
    });
})
