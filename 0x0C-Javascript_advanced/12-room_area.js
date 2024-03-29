const roomDimensions = {
    width: 50,
    length: 100,
    getArea: () => {
        return this.width * this.length;
    },
};

const GetAreaGlobal = roomDimensions.getArea;

const boundGetArea = GetAreaGlobal.bind(roomDimensions);