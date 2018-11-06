require 'test_helper'

class HomeOwnerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def test_homeOwner_factory_is_valid
    my_user = create(:user) #must sucessfully save to database and have a valid id
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    assert(my_home_owner.valid?)
  end
end
