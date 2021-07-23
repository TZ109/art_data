module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'auctiondb', 
        {

            beginprice: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            auctionprice: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            artdataindex: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            ownerid: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: false,
        }
    )
};