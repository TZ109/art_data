module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'imagedb', 
        {
            artist:{
                type: DataTypes.STRING(255),
                allowNull: true
            },

            artname: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            exhibition: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            imageurl: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            //작품설명
            arttext:{
                type: DataTypes.STRING(1000),
                allowNull: true
            },
            //경매시행여부
            isauctioned:{
                type: DataTypes.STRING(255),
                allowNull: true
            },
            
            autiondbindex:
            {
                type: DataTypes.STRING(255),
                allowNull: true
            },

            displaydbindex: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            //전시일정
            displaydate: {
                type: DataTypes.STRING(255),
                allowNull: true
            },

            remaintime: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            //관람수
            audiencenum:
            {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            owner:
            {
                type: DataTypes.STRING(255),
                allowNull: true
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: true,
        }
    )
};