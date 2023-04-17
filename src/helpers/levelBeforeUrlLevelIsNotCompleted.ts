import {ICompletedLevel} from "../types/CompletedLevels";

export const levelBeforeUrlLevelIsNotCompleted = (
  navigate: (path: string) => void,
  completedLevels: ICompletedLevel[],
  levelNumber: number
) => {

  for (let i = 0; i < completedLevels.length; i++) {
    if (completedLevels[i].levelNumber === levelNumber) {
      if (!completedLevels[i].completed) {
        const completedLevelsLength = completedLevels.length;
        for (let j = completedLevelsLength - 1; j >= 0; j--) {
          if (completedLevels[j].completed) {
            navigate(`/level/${j + 1}`);
          }
        }
      }
    }
  }
}