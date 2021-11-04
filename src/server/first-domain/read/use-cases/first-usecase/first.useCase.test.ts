import { FirstUseCase } from './first.useCase'

describe('Faire un premier truc', () => {
  const firstUsecase: FirstUseCase = new FirstUseCase()

  it('fait le premier truc', () => {
    // GIVEN
    // jest.spyOn(candidaturesLoader, 'loadTotalByClientId').mockResolvedValueOnce(3)

    // WHEN
    const result = firstUsecase.handle()

    // THEN
    expect(result).toStrictEqual('Welcome')
  })
})
