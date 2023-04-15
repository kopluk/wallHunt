import {LevelsEntities} from "../models/levels/LevelsEntities";
import {levelTemplates} from "../models/levels/levelTemplates";
import {createLevel_7_Template} from "./createLevel_7_Template";


export const createLevelTemplate = (urlLevelNumber: number) => {

  let levelEntities = LevelsEntities.LEVEL_1;
  let levelMaxMoves = 1;
  const levelNumber: number = urlLevelNumber;

  levelTemplates.forEach(level => {
    if (level.levelNumber === levelNumber) {
      levelEntities = level.entities
      levelMaxMoves = level.maxMoves
    }
  })

  if (urlLevelNumber === 7) {
    const {levelMaxMoves, levelEntities} = createLevel_7_Template();
    return {levelMaxMoves, levelEntities, levelNumber}
  }

  return {levelMaxMoves, levelEntities, levelNumber};
}