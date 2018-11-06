require 'test_helper'

class ShovelerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def test_shoveler_factory_is_valid
    my_user = create(:user) #must sucessfully save to database and have a valid id
    my_shoveler = build(:shoveler)
    my_shoveler.user = my_user
    assert(my_shoveler.valid?)
  end

end
